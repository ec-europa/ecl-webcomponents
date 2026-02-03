/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  BlockToolbar,
  Italic,
  Paragraph,
  List,
  Plugin,
  ButtonView,
  GeneralHtmlSupport,
  SourceEditing,
  TextTransformation,
  Autoformat,
} from 'ckeditor5';
import EclWebComponentsPlugin, { ECL_MAIN_TOOLBAR, ECL_BLOCK_TOOLBAR, DEFAULT_ECL_CONFIG } from '@ecl/ckeditor5-ecl-webcomponents';
import 'ckeditor5/ckeditor5.css';

let editor;

const buttons = document.querySelectorAll('.ecl-theme-switcher button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.documentElement.setAttribute('data-ecl-theme', button.dataset.theme);
  });
});

ClassicEditor.create(document.querySelector('#editor'), {
  plugins: [Autoformat, Essentials, Paragraph, Heading, List, Bold, Italic, BlockToolbar, EclWebComponentsPlugin, SourceEditing, TextTransformation],
  toolbar: ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', '|', 'numberedList', 'bulletedList', '|', ...ECL_MAIN_TOOLBAR],
  blockToolbar: ECL_BLOCK_TOOLBAR,
  licenseKey: 'GPL',
  CustomElement: {
    items: DEFAULT_ECL_CONFIG,
  },
  GeneralHtmlSupport: {
    allow: [
      {
        name: 'h2',
        classes: true,
        attributes: {
          id: true,
          slot: true,
        },
      },
    ],
  },
})
  .then(newEditor => {
    editor = newEditor;
    CKEditorInspector.attach(editor);
    editor.model.document.on('change:data', (evt, data) => {
      const preview = document.getElementById('preview');
      preview.innerHTML = editor.getData();
    });
  })
  .catch(error => {
    console.error(error.stack);
  });

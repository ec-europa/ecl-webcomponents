/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKBox from '@ckeditor/ckeditor5-ckbox/src/ckbox';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import EclWebComponentsPlugin from '@ecl/ckeditor5-ecl-webcomponents/src/ecl_webcomponents';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';

import Icon from './icons/default.svg';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  CKBox,
  CKFinder,
  CloudServices,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  Table,
  TableToolbar,
  TextTransformation,
  EclWebComponentsPlugin,
  SourceEditing,
  GeneralHtmlSupport,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      '|',
      'uploadImage',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      {
        label: 'ECL',
        withText: true,
        items: [
          {
            label: 'icon',
            withText: true,
            items: ['ecl-webcomponents-ecl-icon'],
          },
          {
            label: 'button',
            withText: true,
            items: ['ecl-webcomponents-ecl-button'],
          },
          {
            label: 'link',
            withText: true,
            items: ['ecl-webcomponents-ecl-link'],
          },
          {
            label: 'accordion',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-accordion',
              {
                label: 'items',
                withText: true,
                items: ['ecl-webcomponents-ecl-accordion-item'],
              },
            ],
          },
          {
            label: 'facts & figures',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-fact-figures',
              {
                label: 'items',
                withText: true,
                items: ['ecl-webcomponents-ecl-fact-figures-item'],
              },
            ],
          },
          {
            label: 'content block',
            withText: true,
            items: ['ecl-webcomponents-ecl-content-block'],
          },
          {
            label: 'carousel',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-carousel',
              {
                label: 'items',
                withText: true,
                items: ['ecl-webcomponents-ecl-carousel-item'],
              },
            ],
          },
          {
            label: 'news ticker',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-news-ticker',
              {
                label: 'items',
                withText: true,
                items: ['ecl-webcomponents-ecl-news-ticker-item'],
              },
            ],
          },
          {
            label: 'gallery',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-gallery',
              {
                label: 'items',
                withText: true,
                items: ['ecl-webcomponents-ecl-gallery-item'],
              },
            ],
          },
          {
            label: 'media container',
            withText: true,
            items: ['ecl-webcomponents-ecl-media-container'],
          },
          {
            label: 'pagination',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-pagination',
              {
                withText: true,
                label: 'items',
                items: ['ecl-webcomponents-ecl-pagination-item'],
              },
            ],
          },
          {
            label: 'banner',
            withText: true,
            items: ['ecl-webcomponents-ecl-banner'],
          },
          {
            label: 'blockquote',
            withText: true,
            items: ['ecl-webcomponents-ecl-blockquote'],
          },
          {
            label: 'expandable',
            withText: true,
            items: ['ecl-webcomponents-ecl-expandable'],
          },
          {
            label: 'description list',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-description-list',
              {
                label: 'term and definition',
                withText: true,
                items: ['ecl-webcomponents-ecl-description-list-term', 'ecl-webcomponents-ecl-description-list-definition'],
              },
            ],
          },
          {
            label: 'file',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-file',
              {
                label: 'translations',
                withText: true,
                items: ['ecl-webcomponents-ecl-file-translations', 'ecl-webcomponents-ecl-file-translation-item'],
              },
            ],
          },
          {
            label: 'label',
            withText: true,
            items: ['ecl-webcomponents-ecl-label'],
          },
          {
            label: 'tag',
            withText: true,
            items: ['ecl-webcomponents-ecl-tag'],
          },
          {
            label: 'message',
            withText: true,
            items: ['ecl-webcomponents-ecl-message'],
          },
          {
            label: 'media share',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-social-media-share',
              {
                label: 'items',
                withText: true,
                items: ['ecl-webcomponents-ecl-social-media-share-item'],
              },
            ],
          },
          {
            label: 'date-block',
            withText: true,
            items: ['ecl-webcomponents-ecl-date-block'],
          },
          {
            label: 'ecl-footer',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-footer',
              {
                label: 'items',
                withText: true,
                items: ['ecl-webcomponents-ecl-footer-item'],
              },
            ],
          },
          {
            label: 'spinner',
            withText: true,
            items: ['ecl-webcomponents-ecl-spinner'],
          },
          {
            label: 'popover',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-popover',
              {
                label: 'items',
                withText: true,
                items: ['ecl-webcomponents-ecl-popover-item'],
              },
            ],
          },
          {
            label: 'grid',
            withText: true,
            items: ['ecl-webcomponents-ecl-grid'],
          },
          {
            label: 'inpage nav',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-inpage-navigation',
              {
                label: 'items',
                withText: true,
                items: ['ecl-webcomponents-ecl-inpage-navigation-item'],
              },
            ],
          },
          {
            label: 'form',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-form-group',
              {
                label: 'input(s)',
                withText: true,
                items: [
                  {
                    label: 'input field',
                    withText: true,
                    items: ['ecl-webcomponents-ecl-input'],
                  },
                  {
                    label: 'rating field',
                    withText: true,
                    items: [
                      'ecl-webcomponents-ecl-rating-field',
                      {
                        label: 'rating star',
                        withText: true,
                        items: ['ecl-webcomponents-ecl-rating-star'],
                      },
                    ],
                  },
                  {
                    label: 'select',
                    withText: true,
                    items: ['ecl-webcomponents-ecl-select'],
                  },
                  {
                    label: 'textarea',
                    withText: true,
                    items: ['ecl-webcomponents-ecl-textarea'],
                  },
                ],
              },
            ],
          },
          {
            label: 'breadcrumb',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-breadcrumb',
              {
                label: 'item',
                withText: true,
                items: ['ecl-webcomponents-ecl-breadcrumb-item'],
              },
            ],
          },
          {
            label: 'page-header',
            withText: true,
            items: ['ecl-webcomponents-ecl-page-header'],
          },
          {
            label: 'site header',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-site-header',
              {
                label: 'language item',
                withText: true,
                items: ['ecl-webcomponents-ecl-language-item'],
              },
              {
                label: 'ecl-menu',
                withText: true,
                items: [
                  'ecl-webcomponents-ecl-menu',
                  {
                    label: 'items',
                    withText: true,
                    items: ['ecl-webcomponents-ecl-menu-item'],
                  },
                ],
              },
            ],
          },
          {
            label: 'timeline',
            withText: true,
            items: [
              'ecl-webcomponents-ecl-timeline',
              {
                label: 'timeline item',
                withText: true,
                items: ['ecl-webcomponents-ecl-timeline-item'],
              },
            ],
          },
        ],
      },
      'sourceEditing',
    ],
  },
  image: {
    toolbar: ['imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative'],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  CustomElement: {
    items: [
      {
        tag: 'ecl-grid',
        attributes: {
          'ecl-script': true,
          'columns': 12,
          'breakpoint': '',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-icon',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'icon': 'check-filled',
          'size': 'l',
          'color': 'default',
          'sprite': 'icons',
          'transform': 'none',
        },
        inline: true,
        editable: true,
      },
      {
        tag: 'ecl-button',
        attributes: {
          'theme': 'ec',
          'type': 'primary',
          'style-class': '',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-content-block',
        attributes: {
          'theme': 'ec',
          'hasDescription': 'true',
          'hasTitle': 'true',
          'hasLabels': 'false',
          'hasLinks': 'false',
          'hasSecondaryLinks': 'false',
          'hasLists': 'false',
          'metaPrimary': '["PRIMARY META", "DD Month Year"]',
          'metaSecondary': '',
          'style-class': '',
        },
        inline: false,
        editable: true,
        children: ['ecl-label', 'ecl-link', 'ecl-description-list', 'p'],
      },
      {
        tag: 'ecl-gallery',
        attributes: {
          'ecl-script': true,
          'counter-label': 'Media files in this gallery',
          'view-all-label': 'View all',
          'counter-separator': 'of',
          'next-label': 'Next',
          'prev-label': 'Previous',
          'close-label': 'Close',
          'download-label': 'Download',
          'share-label': 'Share',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-gallery-item',
        attributes: {
          'theme': 'ec',
          'meta': 'Copyright, Author, Licence for the image',
          'media-share-path': '/example.html',
          'media-href': 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          'image-alt': 'Image 1',
          'style-class': '',
          'type': 'image',
          'media-iframe-href': '',
        },
        inline: true,
        editable: true,
        parent: 'ecl-gallery',
      },
      {
        tag: 'ecl-footer',
        attributes: {
          'theme': 'ec',
          'logo-alt': 'European Union',
          'logo-title': 'European union',
          'logo-lang-code': 'en',
          'description': 'This site is managed by the Directorate-General for Communication',
          'site-name': 'European Commission website',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-footer-item',
        attributes: {
          theme: 'ec',
          link: '/example.html',
          theme: 'ec',
          slot: 'ecl-footer-list-main',
        },
        inline: true,
        editable: true,
        parent: 'ecl-footer',
      },
      {
        tag: 'ecl-menu',
        attributes: {
          'ecl-script': true,
          'group': 'group1',
          'slot': 'menu',
          'theme': 'ec',
          'close-label': 'Close',
          'back-label': 'Back',
          'menu-link': '/example.html',
          'menu-title': 'Menu',
        },
        parent: 'ecl-site-header',
        inline: true,
        editable: true,
      },
      {
        tag: 'ecl-menu-item',
        attributes: {
          'theme': 'ec',
          'child': false,
          'link': '/example.html',
          'has-children': false,
          'trigger-aria-label': "Access item's children",
          'current': false,
        },
        inline: true,
        editable: true,
        parent: ['ecl-menu'],
      },
      {
        tag: 'ecl-inpage-navigation',
        attributes: {
          'inpage-title': 'Page contents',
          'inpage-id': 'inpage-id',
          'theme': 'ec',
          'ecl-script': true,
          'with-utils': true,
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-inpage-navigation-item',
        attributes: {
          path: '',
          theme: 'ec',
        },
        inline: true,
        editable: true,
        parent: 'ecl-inpage-navigation',
      },
      {
        tag: 'ecl-link',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'standalone',
          'path': '/example.html',
          'title-attr': 'Title attribute',
          'external': 'false',
          'slot': '',
        },
        inline: true,
        editable: true,
      },
      {
        tag: 'ecl-pagination',
        attributes: {
          'style-class': '',
          'theme': 'ec',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-pagination-item',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'path': '',
          'aria-label': '',
          'current': 'false',
          'next': 'false',
          'previous': 'false',
        },
        inline: true,
        editable: true,
        parent: 'ecl-pagination',
      },
      {
        tag: 'ecl-breadcrumb',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'negative',
          'ecl-script': true,
          'slot': 'breadcrumb',
        },
        inline: true,
        editable: true,
        parent: 'ecl-page-header',
      },
      {
        tag: 'ecl-breadcrumb-item',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'negative',
          'path': '/example.html',
        },
        inline: true,
        editable: true,
        parent: ['ecl-breadcrumb'],
      },
      {
        tag: 'ecl-news-ticker',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'items-length': 6,
          'counter-label': 'of',
          'sr-next': 'Next',
          'sr-prev': 'Previous',
          'sr-pause': 'Pause',
          'ecl-script': true,
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-news-ticker-item',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'path': '/example.html',
        },
        inline: true,
        editable: true,
        parent: 'ecl-news-ticker',
      },
      {
        tag: 'ecl-accordion',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'with-utils': true,
          'ecl-script': true,
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-accordion-item',
        attributes: {
          'style-class': '',
          'id': 'item-id',
          'theme': 'ec',
          'label': 'An accordion item',
        },
        inline: true,
        editable: true,
        parent: 'ecl-accordion',
      },
      {
        tag: 'ecl-tag',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'display',
          'external': false,
        },
        inline: true,
        editable: true,
      },
      {
        tag: 'ecl-label',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'highlight',
          'slot': '',
        },
        inline: true,
        editable: true,
      },
      {
        tag: 'ecl-carousel',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'carousel-id': 'ecl-carousel',
          'slides-number': 4,
          'ecl-script': true,
          'size': 'm',
          'counter-label': 'of',
          'sr-navigation': 'Go to slide %d',
          'sr-previous': 'Prev slides',
          'sr-next': 'Next slides',
          'sr-pause': 'Pause carousel',
          'sr-play': 'Play carousel',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-carousel-item',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'banner-title': 'Duis vitae pulvinar turpis',
          'banner-variant': 'text-box',
          'centered': true,
          'image': 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          'cta-link': '/example.html',
          'cta-label': 'Call to action',
          'aria-label': 'Aria label',
        },
        inline: true,
        editable: true,
        parent: 'ecl-carousel',
      },
      {
        tag: 'ecl-page-header',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'negative',
          'header-title': 'Page title',
          'image': 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
          'thumbnail': 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
          'meta': 'Meta info | DD Month YYYY',
          'thumbnail-alt': 'Europe map',
          'breadcrumb-variant': 'negative',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-fact-figures',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'columns': 3,
          'display-icons': true,
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-fact-figures-item',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'icon': 'check',
          'value': '',
          'item-title': '',
          'icon-transform': '',
        },
        inline: true,
        editable: true,
        parent: 'ecl-fact-figures',
      },
      {
        tag: 'ecl-file',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'default',
          'download-label': 'Download',
          'download-link': '/example.html',
          'file-title': 'State of the Union 2018 brochure',
          'detail-meta': '["Resource type", "Publication date"]',
          'language': 'en',
          'meta': '(16.2 MB - PDF)',
          'image': 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          'image-alt': 'image alternative text',
          'aria-label': 'Aria label',
          'ecl-script': true,
          'labels': '',
          'taxonomies': '',
          'description': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem
  					tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis.
  					Donec maximus pharetra ex a ultricies.`,
          'taxonomies-label': '',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-file-translations',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'toggle-label': 'Other languages',
          'translations-total': '',
          'others': true,
          'slot': 'file-translations',
        },
        inline: true,
        editable: true,
        parent: 'ecl-file',
      },
      {
        tag: 'ecl-file-translation-item',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'default',
          'meta': '',
          'file-title': 'Lorem ipsum dolor sit amet',
          'download-link': '/example.pdf',
          'download-label': 'Download',
          'language': 'fr',
        },
        inline: true,
        editable: true,
        parent: 'ecl-file-translations',
      },
      {
        tag: 'ecl-social-media-share',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'horizontal',
          'description': 'Share on social media',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-social-media-share-item',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'icon': '',
          'share-path': '',
        },
        inline: true,
        editable: true,
        parent: 'ecl-social-media-share',
      },
      {
        tag: 'ecl-blockquote',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'image': 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
          'author': 'Author of the quote',
        },
        inline: true,
        editable: true,
      },
      {
        tag: 'ecl-expandable',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'is-expanded': false,
          'label-collapsed': 'Expand',
          'label-expanded': 'Collapse',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-media-container',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'image': 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
          'alt': 'alternative text',
          'full-width': false,
          'ratio': '16-9',
          'sources': '',
          'tracks': '',
          'ecl-script': true,
          'with-utils': false,
          'embedded-media': false,
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-date-block',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'ongoing',
          'day': '25',
          'month': 'Dec',
          'year': '2022',
          'month-full': 'december',
          'dateTime': '25-12-2022',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-spinner',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'primary',
          'centered': false,
          'visible': true,
          'overlay': false,
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-popover',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'item-id': 'popover-example',
          'ecl-script': true,
          'list': true,
          'icon': 'share',
          'toggle-label': 'Popover',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-popover-item',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'path': '/example.html',
          'icon': 'share',
        },
        inline: true,
        editable: true,
        parent: 'ecl-popover',
      },
      {
        tag: 'ecl-description-list',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'vertical',
          'slot': '',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-description-list-term',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'vertical',
        },
        inline: true,
        editable: true,
        parent: 'ecl-description-list',
      },
      {
        tag: 'ecl-description-list-definition',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'items': '',
          'type': 'link',
        },
        inline: true,
        editable: true,
        parent: 'ecl-description-list',
      },
      {
        tag: 'ecl-banner',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'external': false,
          'variant': 'plain-background',
          'size': 'm',
          'full-width': false,
          'banner-title': 'title of this banner',
          'image': 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          'cta-label': 'Call to action',
          'cta-link': '/example.html',
          'centered': true,
          'credit': '© Copyright or credit',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-message',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'variant': 'warning',
          'message-title': 'Warning message',
          'close-label': 'Close',
          'slot': '',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-form-group',
        attributes: {
          'style-class': '',
          'label': 'Label',
          'required': 'true',
          'optional-text': '(optional)',
          'helper-text': 'Form group helper text',
          'invalid': 'false',
          'disabled': 'false',
          'invalid-text': 'This is an error message',
          'theme': 'ec',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-input',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'type': 'text',
          'width': 'm',
          'disabled': 'false',
          'required': 'true',
          'invalid': 'false',
          'inputId': 'input-id',
          'name': 'input-name',
          'max': 30,
          'min': 0,
          'label': '',
          'placeholder': 'Placeholder text',
          'default-value': '',
          'step': 1,
          'ecl-script': 'true',
          'multiple': 'false',
          'button-replace-label': 'Replace file',
          'button-choose-label': 'Choose file',
        },
        inline: true,
        editable: true,
        parent: 'ecl-form-group',
      },
      {
        tag: 'ecl-select',
        attributes: {
          'style-class': '',
          'required': 'true',
          'disabled': 'false',
          'invalid': 'false',
          'width': 'm',
          'ecl-script': 'true',
          'label': 'Select a country',
          'select-id': 'select-id',
          'helper-text': `This is the input helper text.`,
          'required-text': '*',
          'invalid-text': 'This is the error message',
          'invalid-icon': 'error',
          'optional-text': '(optional)',
          'multiple': 'false',
          'multiple-placeholder': 'Select an item',
          'multiple-search-no-results-text': 'No results found',
          'multiple-all-text': 'Select all',
          'multiple-clear-all-text': 'Clear all',
          'multiple-close-text': 'Close',
          'multiple-search-text': 'Enter keyword',
        },
        inline: true,
        editable: true,
        parent: 'ecl-form-group',
      },
      {
        tag: 'ecl-rating-field',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'disabled': 'false',
          'required': 'true',
        },
        inline: true,
        editable: true,
        parent: 'ecl-form-group',
      },
      {
        tag: 'ecl-rating-star',
        attributes: {
          'style-class': '',
          'theme': 'ec',
          'value': '',
          'item-id': '',
          'label': 'star',
          'disabled': 'false',
          'required': 'true',
        },
        inline: true,
        editable: true,
        parent: 'ecl-rating-field',
      },
      {
        tag: 'ecl-textarea',
        attributes: {
          'style-class': '',
          'required': 'true',
          'theme': 'ec',
          'invalid': 'false',
          'disabled': 'false',
          'name': 'ecl-textarea',
          'width': 'm',
          'textarea-id': '',
        },
        inline: true,
        editable: true,
        parent: 'ecl-form-group',
      },
      {
        tag: 'ecl-site-header',
        attributes: {
          'style-class': '',
          'ecl-script': 'true',
          'login-block': 'true',
          'language-block': 'true',
          'search-block': 'true',
          'search-text': 'search',
          'search-placeholder': 'Placeholder text',
          'language': 'english',
          'lang-code': 'en',
          'login-text': 'Log in',
          'eu-label': 'Official EU languages:',
          'non-eu-label': 'Other languages:',
          'language-title': 'Choose your language',
          'login-link': '/example.html',
          'language-id': 'language-switcher',
          'logo-alt': 'European Commission',
          'logo-title': 'European commission',
          'language-aria-label': 'Choose language',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-language-item',
        attributes: {
          'style-class': '',
          'slot': 'eu-category',
          'path': '/example.html',
          'lang-code': 'bg',
          'language': 'български',
        },
        inline: true,
        editable: true,
        parent: 'ecl-site-header',
      },
      {
        tag: 'ecl-timeline',
        attributes: {
          'style-class': '',
          'ecl-script': 'true',
        },
        inline: false,
        editable: true,
      },
      {
        tag: 'ecl-timeline-item',
        attributes: {
          'style-class': '',
          'item-id': '1',
          'label': '28-29 September 2017',
        },
        inline: true,
        editable: true,
        parent: 'ecl-timeline',
      },
    ],
  },
  htmlSupport: {
    allow: [
      {
        name: 'div',
        classes: true,
        attributes: {
          id: true,
        },
      },
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
};

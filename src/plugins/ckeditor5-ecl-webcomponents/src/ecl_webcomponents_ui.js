import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import { CustomElemCommand } from './ecl_webcomponents_command';
import { ContextualBalloon, clickOutsideHandler } from '@ckeditor/ckeditor5-ui';
import defaultIcon from '@ecl/ckeditor5-ecl-webcomponents/theme/icons/default.svg';
import FormView from './ecl_webcomponents_view';
import style from './style.css';

export default class CustomElemUI extends Plugin {
  static get requires() {
    return [ContextualBalloon];
  }

  init() {
    this.formView = {};
    const editor = this.editor;
    const items = editor.config.get('CustomElement.items');

    this._balloon = this.editor.plugins.get(ContextualBalloon);

    for (let i = 0; i < items.length; i++) {
      const tag = items[i].tag;
      const text = this._safeGet(items[i].placeholder, tag);
      const attr = this._safeGet(items[i].attributes, {});
      const inline = this._safeGet(items[i].inline, false);
      const editable = this._safeGet(items[i].editable, false);
      const parent = this._safeGet(items[i].parent, false);
      const children = this._safeGet(items[i].children, false);
      let icon = this._safeGet(items[i].icon, defaultIcon);

      const attrkeys = Object.keys(attr);

      //schema
      if (inline) {
        editor.model.schema.register(tag, {
          allowIn: parent || ['$container', '$text', '$block'],
          allowChildren: ['$text', '$block'],
          allowAttributes: attrkeys,
          isObject: true,
          isBlock: false,
        });
      } else {
        editor.model.schema.register(tag, {
          allowIn: ['$root', '$container', '$text', '$block'],
          allowChildren: children || ['$text', '$block', '$root'],
          allowAttributes: attrkeys,
          isObject: true,
          isBlock: true,
        });
      }

      editor.model.schema.extend('$text', {
        allowIn: tag,
      });

      //---conversion
      editor.conversion.for('editingDowncast').elementToElement(
        editable
          ? {
              model: tag,
              view: (modelItem, conversionApi) => {
                const { writer } = conversionApi;
                let classes = modelItem.name;

                if (classes.includes('-item')) {
                  classes = classes.replace('-item', '__item');
                }
                if (classes.includes('-term')) {
                  classes = classes.replace('-term', '__term');
                }
                if (classes.includes('-definition')) {
                  classes = classes.replace('-definition', '__definition');
                }
                modelItem['_attrs'].forEach((value, key) => {
                  if (key === 'variant' || key === 'type') {
                    classes += ` ${classes}--${value}`;
                  }
                  if (key === 'columns') {
                    classes += ` ${classes}--col-${value}`;
                  }
                });
                const widgetElement = writer.createContainerElement('section', { class: classes });
                return toWidgetEditable(widgetElement, writer);
              },
            }
          : {
              model: tag,
              view: (modelItem, conversionApi) => {
                const { writer } = conversionApi;
                let classes = modelItem.name;
                if (classes.includes('-item')) {
                  classes = classes.replace('-item', '__item');
                }
                if (classes.includes('-term')) {
                  classes = classes.replace('-term', '__term');
                }
                modelItem['_attrs'].forEach((value, key) => {
                  if (key === 'variant' || key === 'type') {
                    classes += ` ${classes}--${value}`;
                  }
                });
                const widgetElement = writer.createContainerElement('section', { class: classes });
                return toWidget(widgetElement, writer);
              },
            },
      );
      editor.conversion.for('dataDowncast').elementToElement({
        model: tag,
        view: tag,
      });
      editor.conversion.for('upcast').elementToElement({
        view: tag,
        model: tag,
      });
      //attribute conversion
      for (let a = 0; a < attrkeys.length; a++) {
        editor.conversion.for('downcast').attributeToAttribute({
          model: attrkeys[a],
          view: attrkeys[a],
          converterPriority: 'low',
        });

        editor.conversion.for('upcast').attributeToAttribute({
          view: attrkeys[a],
          model: attrkeys[a],
          converterPriority: 'low',
        });
      }
      //---command
      const com = `ecl-webcomponents-${tag}`;
      editor.commands.add(com, new CustomElemCommand(editor, tag, text, inline, attr));
      this.formView[com] = this._createFormView(com, attr);
      //---toolbar
      this._createToolbarButton(com, icon);
    }

    editor.model.schema.extend('ecl-grid', {
      inheritAllFrom: '$block',
      allowIn: 'ecl-grid',
      allowContent: ['ecl-grid', '$block'],
    });
    editor.model.schema.extend('ecl-menu-item', {
      inheritAllFrom: '$block',
      allowIn: 'ecl-menu-item',
      allowContent: ['ecl-menu-item', '$block'],
    });
  }

  afterInit() {
    function grandparentHasOnlyElements(editor) {
      const grandparent = editor.model.document.selection.getFirstPosition().parent.parent; // Get the grandparent element
      for (const child of grandparent.getChildren()) {
        if (child.is('text')) {
          // If the child is a text node, the grandparent does not only contain elements
          return false;
        }
      }

      // If all child nodes are elements, the grandparent only contains elements
      return true;
    }
    // If the enter command is added to the editor, alter its behavior.
    // Enter at the end of a heading element should create a paragraph.
    const editor = this.editor;
    const enterCommand = editor.commands.get('enter');

    if (enterCommand) {
      this.listenTo(enterCommand, 'afterExecute', (evt, data) => {
        const positionParent = editor.model.document.selection.getFirstPosition().parent;
        const isEcl = positionParent.name.includes('ecl');
        const isEclChild = positionParent.parent.name.includes('ecl');

        if (isEcl && !positionParent.is('element', 'paragraph') && !isEclChild) {
          editor.execute('insertParagraph', {
            position: editor.model.createPositionAfter(positionParent),
          });
        }
        if (isEcl && isEclChild) {
          return editor.model.change(writer => {
            writer.setSelection(editor.model.createPositionAfter(positionParent));
          });
        }
      });

      editor.keystrokes.set('arrowup', (keyEvtData, cancel) => {
        const positionParent = editor.model.document.selection.getFirstPosition().parent;
        const isEcl = positionParent.name.includes('ecl');
        const isEclChild = positionParent.parent.name.includes('ecl');

        if (isEcl && isEclChild && grandparentHasOnlyElements(editor)) {
          if (positionParent.previousSibling && positionParent.previousSibling.name === positionParent.name) {
            cancel();
            return editor.model.change(writer => {
              writer.setSelection(editor.model.createPositionAt(positionParent.previousSibling, 0));
            });
          } else {
            cancel();
            return editor.model.change(writer => {
              writer.setSelection(editor.model.createPositionAt(positionParent.parent, 0));
            });
          }
        }
      });
    }
  }

  _createFormView(component, attr) {
    const editor = this.editor;
    const formView = new FormView(editor.locale, attr);
    // Execute the command after clicking the "Save" button.
    this.listenTo(formView, 'submit', () => {
      const inputValues = [];
      formView.inputs.forEach(input => {
        if (input.fieldView.element) {
          inputValues[input.label] = input.fieldView.element.value;
        }
      });
      editor.execute(component, inputValues);
      // Hide the form view after submit.
      this._hideUI(component);
    });

    // Hide the form view after clicking the "Cancel" button.
    this.listenTo(formView, 'cancel', () => {
      this._hideUI(component);
    });

    // Hide the form view when clicking outside the balloon.
    clickOutsideHandler({
      emitter: formView,
      activator: () => this._balloon.visibleView === formView,
      contextElements: [this._balloon.view.element],
      callback: () => this._hideUI(component),
    });

    return formView;
  }

  _showUI(component) {
    const commandValue = this.editor.commands.get(component).attributes;
    const position = editor.model.document.selection.getFirstPosition();

    if (component.endsWith(position.parent.name)) {
      this.formView[component].inputs.forEach(input => {
        const attributeName = input.label;
        const value = position.parent['_attrs'].get(attributeName);
        if (input.fieldView.element) {
          input.fieldView.element.value = value;
        } else {
          input.fieldView.value = value;
        }
      });
    } else if (commandValue) {
      this.formView[component].inputs.forEach(input => {
        const attributeName = input.label;
        const value = commandValue[attributeName];
        if (input.fieldView.element) {
          input.fieldView.element.value = value;
        } else {
          input.fieldView.value = value;
        }
      });
    }

    this._balloon.add({
      view: this.formView[component],
      position: this._getBalloonPositionData(),
    });

    this.formView[component].focus();
  }

  _hideUI(component) {
    // Clear the input field values and reset the form.
    this.formView[component].element.reset();

    this._balloon.remove(this.formView[component]);

    // Focus the editing view after inserting the abbreviation so the user can start typing the content
    // right away and keep the editor focused.
    this.editor.editing.view.focus();
  }

  _getBalloonPositionData() {
    const view = this.editor.editing.view;
    const viewDocument = view.document;
    let target = null;

    // Set a target position by converting view selection range to DOM
    target = () => view.domConverter.viewRangeToDom(viewDocument.selection.getFirstRange());

    return {
      target,
    };
  }

  _createToolbarButton(name, tbicon) {
    const editor = this.editor;

    editor.ui.componentFactory.add(name, locale => {
      const button = new ButtonView(locale);
      const command = editor.commands.get(name);
      button.isEnabled = true;
      button.isOn = true;
      button.label = name;
      button.tooltip = true;
      button.icon = tbicon;

      button.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');
      this.listenTo(button, 'execute', () => {
        this._showUI(name);
      });

      return button;
    });
  }

  _safeGet(input, safeDefault) {
    if (typeof input !== 'undefined' && (input || input === false || input === 0)) {
      return input;
    } else {
      return safeDefault;
    }
  }
}

import Command from '@ckeditor/ckeditor5-core/src/command';

export class CustomElemCommand extends Command {
  constructor(editor, tagName, placeholder, inline, attributes) {
    super(editor);

    this.tagName = tagName;
    this.placeholder = placeholder;
    this.attributes = attributes;
    this.inline = inline;
  }

  execute(attributes) {
    const attrs = { ...attributes };
    const model = this.editor.model;

    model.change(writer => {
      const position = model.document.selection.getFirstPosition();
      if (position.parent.name.endsWith(this.tagName)) {
        const toBeUpdated = position.findAncestor(this.tagName);
        if (toBeUpdated && this.tagName !== 'ecl-menu-item') {
          writer.setAttributes(attrs, toBeUpdated);
        }
      } else {
        const elem = writer.createElement(this.tagName, attrs);
        model.insertContent(elem, position);
        writer.setSelection(elem, 'in');
      }
    });
  }

  refresh() {
    const model = this.editor.model;
    const selection = model.document.selection;
    this.isEnabled = true;
  }
}

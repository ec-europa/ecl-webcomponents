import { Component, h, Prop, State, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'ecl-textarea',
  styleUrls: {
    ec: './build/styles/ecl-textarea-ec.css',
    eu: './build/styles/ecl-textarea-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclTextarea{
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() invalid: boolean = false;
  @Prop() width: string = 'm';
  @Prop() textareaId: string;
  @Prop() name: string;
  @Prop() rows: number = 4;
  @Prop() placeholder: string;
  @State() value: string;
  @Prop() hasChanged: boolean = false;
  @Prop() isFocused: boolean = false;
  @Event() inputFocus: EventEmitter<FocusEvent>;
  @Event() inputBlur: EventEmitter<FocusEvent>;
  @Event() inputChange: EventEmitter;

  getClass(): string {
    const styleClasses = [
      `ecl-text-area`,
      `ecl-text-area--${this.width}`,
      this.styleClass
    ];

    if (this.disabled) {
      styleClasses.push('ecl-text-area--disabled');
    }
    if (this.invalid) {
      styleClasses.push('ecl-text-area--invalid');
    }

    return styleClasses.join(' ');
  }

  handleInput(event) {
    this.value = event.target.value;
  }

  handleFocus(event) {
    this.inputFocus.emit(event);
    this.isFocused = true;
  }

  handleChange(event) {
    this.inputChange.emit(event);
    this.hasChanged = true;
  }

  handleBlur(event) {
    this.inputBlur.emit(event);
    this.isFocused = false;
  }

  render() {
    let attributes = {
      class: this.getClass(),
      id: this.textareaId,
      name: this.name,
      required: this.required,
      disabled: this.disabled,
      placeholder: this.placeholder,
      rows: this.rows,
    };

    return (
      <textarea
        {...attributes}
        onInput={(event) => this.handleChange(event)}
        onFocus={ev => this.handleFocus(ev)}
        onBlur={ev => this.handleBlur(ev)}
        onChange={ev => this.handleChange(ev)}
      >
          <slot></slot>
      </textarea>
    );
  }
}
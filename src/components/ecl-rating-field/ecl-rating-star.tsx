import { Component, h, Prop, Event, EventEmitter, Host, Element } from '@stencil/core';

@Component({
  tag: 'ecl-rating-star',
  styleUrls: {
    ec: './build/styles/ecl-rating-field-ec.css',
    eu: './build/styles/ecl-rating-field-eu.css',
  },
  shadow: false,
})
export class EclRatingStar {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() itemId: string;
  @Prop() value: string;
  @Prop() name: string;
  @Prop() checked: boolean = false;
  @Prop() required: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() icon: string = 'star-outline';
  @Prop() iconFilled: string = 'star-filled';
  @Prop() label: string;
  @Prop() hasChanged: boolean = false;
  @Prop() isFocused: boolean = false;
  @Event() inputFocus: EventEmitter<FocusEvent>;
  @Event() inputBlur: EventEmitter<FocusEvent>;
  @Event() inputChange: EventEmitter;

  private rating = 0;

  private handleStarClick = (event: Event) => {
    const star = (event.currentTarget as HTMLElement);
    const value = Number(star.dataset.value);

    this.rating = value;
    this.updateStars();
  };

  private updateStars() {
    const field = this.el.closest('.ecl-rating-field');
    if (field) {
      const stars = field.querySelectorAll('.ecl-rating-field__label');

      stars.forEach((star: Element) => {
        const value = Number((star as HTMLElement).dataset.value);

        if (value <= this.rating) {
          star.classList.add('is-filled');
        } else {
          star.classList.remove('is-filled');
        }
      });
    }
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

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <Host>
        <input
          id={this.itemId}
          class={`ecl-rating-field__input ecl-rating-field-${this.theme}`}
          type="radio"
          name={this.name}
          value={this.value}
          checked={this.checked}
          required={this.required}
          disabled={this.disabled}
          onFocus={ev => this.handleFocus(ev)}
          onBlur={ev => this.handleBlur(ev)}
          onChange={ev => this.handleChange(ev)}
        />
        <label 
          class={`ecl-rating-field__label ecl-rating-field-${this.theme}`} 
          htmlFor={this.itemId}
          data-value={this.value}
          onClick={this.handleStarClick}
        >
        { this.label ?
          <span class="ecl-rating-field__sr-label">{ this.label }</span> : '' }
          <ecl-icon
            icon={this.iconFilled}
            styleClass={`ecl-rating-field__icon-filled ecl-rating-field-${this.theme}`}
            size="m"
          >
          </ecl-icon>
          <ecl-icon
            icon={this.icon}
            styleClass={`ecl-rating-field__icon-outline ecl-rating-field-${this.theme}`}
            size="m"
          >
          </ecl-icon>
        </label>
      </Host>
    );
  }
}
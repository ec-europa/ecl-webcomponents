const getArgs = () => {
  return {
    hideLabel: false,
    label: 'Please rate',
    required: true,
    invalid: false,
    disabled: false,
    helperText: `This is the group's helper text.`,
    requiredText: '(required)',
    invalidText: 'This is the error message',
    invalidIcon: 'error-outline',
    optionalText: '(optional)',
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true }},
    hideLabel: {
      name: 'hide-label',
      control: { type: 'boolean' },
      description: 'Hide the label',
    },
    required: {
      type: { name: 'boolean' },
      description: 'Required input',
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Disabled input',
    },
    invalid: {
      type: { name: 'boolean' },
      description: 'Invalid input',
    },
    label: {
      type: { name: 'string' },
      description: 'Legend of the form group',
    },
    requiredText: {
      name: 'required-text',
      type: { name: 'string' },
      description: 'Text to show when required',
    },
    optionalText: {
      name: 'optional-text',
      type: { name: 'string' },
      description: 'Text to show when optional',
    },
    helperText: {
      name: 'helper-text',
      type: { name: 'string' },
      description: 'Helper text',
    },
    invalidText: {
      name: 'invalid-text',
      type: { name: 'string' },
      description: 'Error message',
    },
    invalidIcon: {
      name: 'invalid-icon',
      type: { name: 'string' },
      description: 'Error icon',
    },
  };
};

export default {
  title: 'Components/form/rating field',
};

const Template = (args) => 
  `<ecl-form-group
    hide-label=${args.hideLabel}
    helper-text="${args.helperText}"
    invalid-text="${args.invalidText}"
    required-text="${args.requiredText}"
    invalid-icon="${args.invalidIcon}"
    optional-text="${args.optionalText}"
    label="${args.label}"
    required=${args.required}
    disabled="${args.disabled}"
    invalid=${args.invalid}
    aria-label-optional="Aria label optional"
    aria-label-required="Aria label required"
  >
    <ecl-rating-field
      disabled=${args.disabled}
      required=${args.required}
      theme="${args.theme}"
    > 
      <ecl-rating-star
        value="5"
        item-id="item-id-5"
        label="5 stars"
        name="rating"
        disabled=${args.disabled}
        required=${args.required}
      >
      </ecl-rating-star>
      <ecl-rating-star
        value="4"
        item-id="item-id-4"
        label="4 stars"
        name="rating"
        disabled=${args.disabled}
        required=${args.required}
      >
      </ecl-rating-star>
      <ecl-rating-star
        value="3"
        item-id="item-id-3"
        label="3 stars"
        name="rating"
        disabled=${args.disabled}
        required=${args.required}
      >
      </ecl-rating-star>
      <ecl-rating-star
        value="2"
        item-id="item-id-2"
        name="rating"
        label="2 stars"
        disabled=${args.disabled}
        required=${args.required}
      >
      </ecl-rating-star>
      <ecl-rating-star
        value="1"
        item-id="item-id-1"
        name="rating"
        label="1 star"
        disabled=${args.disabled}
        required=${args.required}
      >
      </ecl-rating-star>
    </ecl-rating-field>
  </ecl-form-group>`;

export const RatingField = Template.bind({});
RatingField.storyName = 'default';
RatingField.args = getArgs();
RatingField.argTypes = getArgTypes();
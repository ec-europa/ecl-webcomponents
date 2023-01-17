const getArgs = () => {
  return {
    label: 'Please rate',
    required: true,
    disabled: false,
    helperText: `This is the group's helper text.`,
    requiredText: '*',
    invalidText: 'This is the error message',
    invalidIcon: 'error',
    optionalText: '(optional)',
  };
};

const getArgTypes = () => {
  return {
    required: {
      type: { name: 'boolean' },
      description: 'Required input',
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Disabled input',
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
  title: 'Components/rating field',
};

const Template = (args) => 
  `<ecl-form-group
    helper-text="${args.helperText}"
    helper-id="helper-id"
    invalid-text="${args.invalidText}"
    invalid-icon="${args.invalidIcon}"
    optional-text="${args.optionalText}"
    label="${args.label}"
    required=${args.required}
    disabled="${args.disabled}"
  >
    <ecl-rating-field
      disabled=${args.disabled}
      required=${args.required}
    >
      <ecl-rating-star
        theme="${args.theme}"
        value="1"
        item-id="item-id-1"
        label="1 star"
        disabled=${args.disabled}
        required=${args.required}
      >
      </ecl-rating-star>
      <ecl-rating-star
        theme="${args.theme}"
        value="2"
        item-id="item-id-2"
        label="2 stars"
        disabled=${args.disabled}
        required=${args.required}
      >
      </ecl-rating-star>
      <ecl-rating-star
        theme="${args.theme}"
        value="3"
        item-id="item-id-3"
        label="3 stars"
        disabled=${args.disabled}
        required=${args.required}
      >
      </ecl-rating-star>
      <ecl-rating-star
        theme="${args.theme}"
        value="4"
        item-id="item-id-4"
        label="4 stars"
        disabled=${args.disabled}
        required=${args.required}
      >
      </ecl-rating-star>
      <ecl-rating-star
        theme="${args.theme}"
        value="5"
        item-id="item-id-5"
        label="5 stars"
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
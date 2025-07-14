const getArgs = () => {
  return {
    variant: 'ongoing',
    day: '26',
    month: 'Sep',
    monthFull: 'September',
    year: '2022',
    dateTime: '2019-09-26',
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
    variant: {
      type: { name: 'select' },
      options: ['ongoing', 'past'],
      description: "Date block variant",
      control: {
        labels: {
          ongoing: 'upcoming & ongoing',
          past: 'past & cancelled',
        },
      },
    },
    day: {
      type: { name: 'string'},
      description: 'The date day',
    },
    month: {
      type: { name: 'string'},
      description: 'The date month (abridged)',
    },
    monthFull: {
      name: 'full month',
      type: { name: 'string'},
      description: 'The date full month',
    },
    year: {
      type: { name: 'string'},
      description: 'The date year',
    },
    dateTime: {
      name: 'date-time',
      type: { name: 'string'},
      description: 'Day time (YYY-MM-DD)',
    },
  };
};

export default {
  title: 'Components/date-block',
};

const Template = (args) => 
  `<ecl-date-block
    variant="${args.variant}"
    day="${args.day}"
    month="${args.month}"
    month-full="${args.monthFull}"
    year="${args.year}"
    date-time="${args.dateTime}" 
  >
  </ecl-date-block>`;

export const DateBlock = Template.bind({});
DateBlock.storyName = 'default';
DateBlock.args = getArgs();
DateBlock.argTypes = getArgTypes();

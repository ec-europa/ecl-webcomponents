const getArgs = () => {
  return {
    variant: 'default',
    day: '26',
    month: 'Sep',
    year: '2022',
    dateTime: '2019-09-26',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['default', 'ongoing', 'cancelled', 'past', 'rescheduled'],
      description: "Date block variant"
    },
    day: {
      type: { name: 'string'},
      description: 'Day of the month',
    },
    month: {
      type: { name: 'string'},
      description: 'Month, abbreviated',
    },
    year: {
      type: { name: 'string'},
      description: 'Year'
    },
    dateTime: {
      name: 'date-time',
      type: { name: 'string'},
      description: 'Day time',
    },
  };
};

export default {
  title: 'Components/date-block',
};

const Template = (args) => 
`<ecl-date-block
  variant="${args.variant}"
  theme="${args.theme}"
  day="${args.day}"
  month="${args.month}"
  year="${args.year}"
  date-time="${args.dateTime}" 
>
</ecl-date-block>`;

export const DateBlock = Template.bind({});
DateBlock.storyName = 'default';
DateBlock.args = getArgs();
DateBlock.argTypes = getArgTypes();

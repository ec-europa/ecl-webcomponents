const getArgs = () => {
  return {
    eventTitle: 'Event coming soon!',
    fullWidth: false,
  };
};

const getArgTypes = () => {
  return {
    eventTitle: {
      name: 'event-title',
      type: { name: 'string'},
      description: 'Title of the event',
    },
    fullWidth: {
      name: 'full-width',
      type: { name: 'boolean' },
      description: 'Use the full width of the viewport',
    },
  }
};

export default {
  title: 'Components/add-to-calendar',
};

const Template = (args) => 
  `<ecl-grid container>
    <ecl-add-to-calendar 
      color-mode="${args.color_mode}"
      event-title="${args.eventTitle}"
      full-width="${args.fullWidth}"
      meta='[{"label": "March 15-17 2026", "icon": "calendar"}, {"label": "2:00 PM - 4:00 PM", "icon": "clock"}, {"label": "San Francisco, CA", "icon": "location"}]'
    >
    </ecl-add-to-calendar>
  </ecl-grid>`;

export const AddToCalendar = Template.bind({});
AddToCalendar.storyName = 'default';
AddToCalendar.args = getArgs();
AddToCalendar.argTypes = getArgTypes();

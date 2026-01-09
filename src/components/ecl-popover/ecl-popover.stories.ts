export default {
  title: 'Components/popover',
};

const Template = () => 
  `<ecl-popover
    toggle-label="Popover"
    icon="share"
    item-id="popover-example"
    close
  >
    Nulla est ad excepteur sint officia fugiat aute commodo ullamco amet culpa eiusmod labore.
    Esse nostrud aliqua pariatur pariatur officia non laboris cillum velit dolore in sit laboris fugiat.
  </ecl-popover>`;

export const Popover = Template.bind({});
Popover.storyName = 'default';
Popover.argTypes = {
  color_mode: {
    table: { disable: true },
  },
};
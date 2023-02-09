export default {
  title: 'Components/popover',
};

const Template = (args) => 
  `<ecl-popover
    ecl-script
    theme="${args.theme}"
    toggle-label="Popover"
    list
    icon="share"
    item-id="popover-example"
  >
    <ecl-popover-item
      path="/example.html"
      icon="global"
    >
      Item 1
    </ecl-popover-item>
    <ecl-popover-item
      path="/example.html"
      icon="global"
    >
      Item 2
    </ecl-popover-item>
    <ecl-popover-item
      path="/example.html"
      icon="global"
    >
      Item 3
    </ecl-popover-item>
    <ecl-popover-item
      path="/example.html"
      icon="global"
    >
      Item 4
    </ecl-popover-item>
      <ecl-popover-item
      path="/example.html"
      icon="global"
    >
      Item 5
    </ecl-popover-item>
    <ecl-popover-item
      path="/example.html"
      icon="global"
    >
      Item 6
    </ecl-popover-item>
    <ecl-popover-item
      path="/example.html"
      icon="global"
    >
      Item 7
    </ecl-popover-item>
    <ecl-popover-item
      path="/example.html"
      icon="global"
    >
      Item 8
    </ecl-popover-item>
  </ecl-popover>`;

export const Popover = Template.bind({});
Popover.storyName = 'default';
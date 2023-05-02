const getArgs = () => {
  return {
    group: 'group1',
    menuTitle: 'Menu',
    menuLink: '/example.html',
    backMenu: 'Back',
    closeMenu: 'Close',
  };
};

const getArgTypes = () => {
  return {
    group: {
      type: { name: 'select' },
      options: ['group1'],
      description: 'Menu variant',
    },
    menuTitle: {
      name: 'Title of the menu',
      type: { name: 'string' },
      description: '',
    },
    menuLink: {
      name: 'Menu link',
      type: { name: 'string' },
      description: '',
    },
    closeMenu: {
      name: 'Label of the close button',
      type: { name: 'string' },
      description: '',
    },
    backMenu: {
      name: 'Label of the back button',
      type: { name: 'string' },
      description: '',
    },
  };
};

export default {
  title: 'Components/Navigation/menu',
};

const Template = args =>
  `<ecl-menu
    group="${args.group}"
    theme="${args.theme}"
    close-label="${args.closeMenu}"
    back-label="${args.backMenu}"
    menu-link="${args.menuLink}"
    ecl-script
    menu-title="${args.menuTitle}"
  >
    <ecl-menu-item
      link="/example.html"
      theme="${args.theme}"
    >
      Home
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      link="/example.html"
      has-children
      trigger-aria-label="Access item's children"
      current
    >
      Item 2 label
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 2.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 2.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        current
        slot="sublist"
      >
        Item 2.3
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
        external
      >
        Item 2.4
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      has-children
      trigger-aria-label="Access item's children"
      link="/example.html"
    >
      Item 3 with a very long label
      <ecl-menu-item
        theme="${args.theme}"
        child
        link="/example.html"
        slot="sublist"
      >
        Item 3.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        child
        link="/example.html"
        slot="sublist"
      >
        Item 3.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        child
        link="/example.html"
        slot="sublist"
      >
        Item 3.3
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      link="/example.html"
    >
      Item 4 label
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      link="/example.html"
      has-children
      trigger-aria-label="Access item's children"
    >
      Item 5 label
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 5.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 5.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 5.3
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 5.4
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      link="/example.html"
      has-children
      trigger-aria-label="Access item's children"
    >
      Item 6
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.3
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.4
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.5
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.6
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.7
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.8
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.9 with a very long label
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.10
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.11
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.12
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.13
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.14
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.15
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.16
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.17
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 6.18
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      has-children
      link="/example.html"
      trigger-aria-label="Access item's children"
    >
      Item 7 label
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 7.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 7.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 7.3
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 7.4
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 7.5
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 7.6
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 7.7
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="/example.html"
        child
        slot="sublist"
      >
        Item 7.8
      </ecl-menu-item>
    </ecl-menu-item>
  </ecl-menu>`;

export const Menu = Template.bind({});
Menu.storyName = 'default';
Menu.args = getArgs();
Menu.argTypes = getArgTypes();

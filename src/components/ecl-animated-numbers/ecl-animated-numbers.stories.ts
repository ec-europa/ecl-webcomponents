const getArgs = () => {
  return {
    border: false,
    counterColor: true,
    withBackground: false,
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
    border: {
      type: { name: 'boolean' },
      description: "Items with border left",
    },
    counterColor: {
      name: 'counter-color',
      type: { name: 'boolean' },
      description: 'Coloured elements',
    },
    withBackground: {
      name: 'with-background',
      type: { name: 'boolean' },
      description: 'With a dark background',
    },
  };
};

export default {
  title: 'Components/animated-numbers',
};

const Template = (args) => 
  `<ecl-grid container>
    <ecl-animated-numbers
      with-background="${args.withBackground}"
      border="${args.border}"
      counter-color="${args.counterColor}"
    >
      <ecl-animated-numbers-item
        icon="users"
        item-prefix=""
        value="213"
        item-suffix="€"
        item-suffix-label="euro"
        category="Revenue"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      >
      </ecl-animated-numbers-item>
      <ecl-animated-numbers-item
        icon="currency-eur"
        item-prefix="billion"
        value="888.2"
        item-suffix="€"
        item-suffix-label="euro"
        category="Revenue"
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
      </ecl-animated-numbers-item>
      <ecl-animated-numbers-item
        icon="trend-up"
        item-prefix="million"
        value="975"
        item-suffix="<"
        item-suffix-label="less than"
        category="Revenue"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      >
      </ecl-animated-numbers-item>
      <ecl-animated-numbers-item
        icon="pulse"
        item-prefix="€"
        item-prefix-label="euro"
        value="1250"
        item-suffix="billions"
        category="Revenue"
        description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
      >
      </ecl-animated-numbers-item>
      <ecl-animated-numbers-item
        icon="atom"
        item-prefix="€"
        item-prefix-label="euro"
        value="4350"
        item-suffix="millions"
        category="Revenue"
        description="Curabitur ut mauris quam. Fusce non consequat ipsum"
      >
      </ecl-animated-numbers-item>
      <ecl-animated-numbers-item
        icon="bell-simple"
        item-prefix="€"
        item-prefix-label="euro"
        value="125"
        item-suffix="billions"
        category="Revenue"
        description="Curabitur ut mauris quam. Fusce non consequat ipsum"
      >
      </ecl-animated-numbers-item>
      <ecl-animated-numbers-item
        icon="boat"
        item-prefix="€"
        item-prefix-label="euro"
        value="8765"
        item-suffix="billions"
        category="Revenue"
        description="Integer pharetra lacinia tristique"
      >
      </ecl-animated-numbers-item>
    </ecl-animated-numbers>
  </ecl-grid>`;

export const AnimatedNumbers = Template.bind({});
AnimatedNumbers.storyName = 'default';
AnimatedNumbers.args = getArgs();
AnimatedNumbers.argTypes = getArgTypes();

import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/category-filter',
};

const Template = (args) => 
`<ecl-category-filter
  name-attr="${args.name || ''}"
  color-mode="${args.color_mode}"
  collapse-all="${args.collapseAll}"
  collapse-all-label="${args.collapseAllLabel}"
  expand-all="${args.expandAll}"
  expand-all-label="${args.expandAllLabel}"
>
  <ecl-category-filter-item
    path="${randomizedLink('/example.html')}"
    label="Item 1 label"
    level="1"
  >
  </ecl-category-filter-item>
  <ecl-category-filter-item
    path="${randomizedLink('/example.html')}"
    label="Item 2 label"
    level="1"
    sub-items
  >
    <ecl-category-filter-item
      path="${randomizedLink('/example.html')}"
      label="Item 2.1"
      level="2"
      sub-items
    >
      <ecl-category-filter-item
        label="Item 2.1.1"
        path="${randomizedLink('/example.html')}"
        level="3"
      ></ecl-category-filter-item>
      <ecl-category-filter-item
        label="Item 2.1.2 "
        path="${randomizedLink('/example.html')}"
        level="3"
        sub-items
      >
        <ecl-category-filter-item
          label="Item 2.1.2 a"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
        <ecl-category-filter-item
          label="Item 2.1.2 b"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
        <ecl-category-filter-item
          label="Item 2.1.2 c"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
      </ecl-category-filter-item>
      <ecl-category-filter-item
        path="${randomizedLink('/example.html')}"
        label="Item 2.1.3"
        level="3"
      >
      </ecl-category-filter-item>
      <ecl-category-filter-item
        path="${randomizedLink('/example.html')}"
        label="Item 2.1.4"
        level="3"
      >
      </ecl-category-filter-item>
    </ecl-category-filter-item>
    <ecl-category-filter-item
      label="Item 2.2 (without link)"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      label="Item 2.3"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      label="Item 2.4"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item   
      label="Item 2.5"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      label="Item 2.6"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      label="Item 2.7"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
  </ecl-category-filter-item>
  <ecl-category-filter-item
    path="${randomizedLink('/example.html')}"
    label="Item 3 with a very long label"
    level="1"
    sub-items
    current
  >
    <ecl-category-filter-item
      label="Item 3.1"
      path="${randomizedLink('/example.html')}"
      level="2"
      sub-items
    >
      <ecl-category-filter-item
        label="Item 3.1.1"
        path="${randomizedLink('/example.html')}"
        level="3"
      >
      </ecl-category-filter-item>
      <ecl-category-filter-item
        label="Item 3.1.2"
        path="${randomizedLink('/example.html')}"
        level="3"
        sub-items
      >
        <ecl-category-filter-item
          label="Item 3.1.2 a"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
        <ecl-category-filter-item
          label="Item 3.1.2 b"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
        <ecl-category-filter-item
          label="Item 3.1.2 c"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
      </ecl-category-filter-item>
      <ecl-category-filter-item
        label="Item 3.1.3"
        path="${randomizedLink('/example.html')}"
        level="3"
      >
      </ecl-category-filter-item>
      <ecl-category-filter-item
        label="Item 3.1.4"
        path="${randomizedLink('/example.html')}"
        level="3"
      >
      </ecl-category-filter-item>
    </ecl-category-filter-item>
    <ecl-category-filter-item
      label="Item 3.2"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      label="Item 3.3"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
  </ecl-category-filter-item>
  <ecl-category-filter-item
    label="Item 4"
    path="${randomizedLink('/example.html')}"
    level="1"
  >
  </ecl-category-filter-item>
</ecl-category-filter>`;

export const CategoryFilter = Template.bind({});
CategoryFilter.storyName = 'default';
CategoryFilter.args = {
  name: '',
  expandAll: false,
  collapseAll: false,
  expandAllLabel: 'Expand all',
  collapseAllLabel: 'Collapse all',
};
CategoryFilter.argTypes = {
  name: {
    description: 'Name attribute, if set only on item at a time will expand',
    control: {
      type: 'text',
    },
    if: { arg: 'expandAll', truthy: false },
  },
  expandAll: {
    name: 'expand-all',
    description: 'If true, the expand all button is displayed',
    control: {
      type: 'boolean'
    }
  },
  collapseAll: {
    name: 'collapse-all',
    description: 'If true, the collapse all button is displayed',
    control: {
      type: 'boolean'
    }
  },
  expandAllLabel: {
    name: 'expand-all-label',
    description: 'The label for the expand all button',
    control: {
      type: 'text'
    }
  },
  collapseAllLabel: {
    name: 'collapse-all-label',
    description: 'The label for the collapse all button',
    control: {
      type: 'text'
    }
  },
};

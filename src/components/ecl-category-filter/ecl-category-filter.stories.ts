import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/category-filter',
};

const Template = (args) => 
`<ecl-category-filter
  theme="${args.theme}"
  ecl-script
>
  <ecl-category-filter-item
    theme="${args.theme}"
    path="${randomizedLink('/example.html')}"
    label="Item 1 label"
    level="1"
  >
  </ecl-category-filter-item>
  <ecl-category-filter-item
    theme="${args.theme}"
    path="${randomizedLink('/example.html')}"
    label="Item 2 label"
    level="1"
    sub-items
    expanded
  >
    <ecl-category-filter-item
      theme="${args.theme}"
      path="${randomizedLink('/example.html')}"
      label="Item 2.1"
      level="2"
      sub-items
      expanded
    >
      <ecl-category-filter-item
        theme="${args.theme}"
        label="Item 2.1.1"
        path="${randomizedLink('/example.html')}"
        level="3"
      ></ecl-category-filter-item>
      <ecl-category-filter-item
        theme="${args.theme}"
        label="Item 2.1.2 "
        path="${randomizedLink('/example.html')}"
        level="3"
        sub-items
      >
        <ecl-category-filter-item
          theme="${args.theme}"
          label="Item 2.1.2 a"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
        <ecl-category-filter-item
          theme="${args.theme}"
          label="Item 2.1.2 b"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
        <ecl-category-filter-item
          theme="${args.theme}"
          label="Item 2.1.2 c"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
      </ecl-category-filter-item>
      <ecl-category-filter-item
        theme="${args.theme}"
        path="${randomizedLink('/example.html')}"
        label="Item 2.1.3"
        level="3"
      >
      </ecl-category-filter-item>
      <ecl-category-filter-item
        theme="${args.theme}"
        path="${randomizedLink('/example.html')}"
        label="Item 2.1.4"
        level="3"
      >
      </ecl-category-filter-item>
    </ecl-category-filter-item>
    <ecl-category-filter-item
      theme="${args.theme}"
      label="Item 2.2"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      theme="${args.theme}"
      label="Item 2.3"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      theme="${args.theme}"
      label="Item 2.4"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      theme="${args.theme}"    
      label="Item 2.5"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      theme="${args.theme}"
      label="Item 2.6"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      theme="${args.theme}"
      label="Item 2.7"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
  </ecl-category-filter-item>
  <ecl-category-filter-item
    theme="${args.theme}"
    path="${randomizedLink('/example.html')}"
    label="Item 3 with a very long label"
    level="1"
    sub-items
  >
    <ecl-category-filter-item
      theme="${args.theme}"
      label="Item 3.1"
      path="${randomizedLink('/example.html')}"
      level="2"
      sub-items
    >
      <ecl-category-filter-item
        theme="${args.theme}"
        label="Item 3.1.1"
        path="${randomizedLink('/example.html')}"
        level="3"
      >
      </ecl-category-filter-item>
      <ecl-category-filter-item
        theme="${args.theme}"
        label="Item 3.1.2"
        path="${randomizedLink('/example.html')}"
        level="3"
        sub-items
      >
        <ecl-category-filter-item
          theme="${args.theme}"
          label="Item 3.1.2 a"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
        <ecl-category-filter-item
          theme="${args.theme}"
          label="Item 3.1.2 b"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
        <ecl-category-filter-item
          theme="${args.theme}"
          label="Item 3.1.2 c"
          path="${randomizedLink('/example.html')}"
          level="4"
        >
        </ecl-category-filter-item>
      </ecl-category-filter-item>
      <ecl-category-filter-item
        theme="${args.theme}"
        label="Item 3.1.3"
        path="${randomizedLink('/example.html')}"
        level="3"
      >
      </ecl-category-filter-item>
      <ecl-category-filter-item
        theme="${args.theme}"
        label="Item 3.1.4"
        path="${randomizedLink('/example.html')}"
        level="3"
      >
      </ecl-category-filter-item>
    </ecl-category-filter-item>
    <ecl-category-filter-item
      theme="${args.theme}"
      label="Item 3.2"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
    <ecl-category-filter-item
      theme="${args.theme}"
      label="Item 3.3"
      path="${randomizedLink('/example.html')}"
      level="2"
    >
    </ecl-category-filter-item>
  </ecl-category-filter-item>
  <ecl-category-filter-item
    theme="${args.theme}"
    label="Item 4"
    path="${randomizedLink('/example.html')}"
    level="1"
  >
  </ecl-category-filter-item>
</ecl-category-filter>`;

export const CategoryFilter = Template.bind({});
CategoryFilter.storyName = 'default';

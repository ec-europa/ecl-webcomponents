import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/Navigation/pagination',
};

const Template = () =>
  `<ecl-pagination
  >
    <ecl-pagination-item
      path="${randomizedLink('/example.html')}"
      aria-label="Previous page"
      previous
    >
      Previous
    </ecl-pagination-item>
    <ecl-pagination-item
      path="${randomizedLink('/example.html')}"
      aria-label="Page 1"
     >
      1
    </ecl-pagination-item>
    <ecl-pagination-item
      truncation
     >
     </ecl-pagination-item>
    <ecl-pagination-item
      path="${randomizedLink('/example.html')}"
      aria-label="Page 24"
     >
      24
     </ecl-pagination-item>
    <ecl-pagination-item
      path="${randomizedLink('/example.html')}"
      aria-label="Page 25"
    >
      25
    </ecl-pagination-item>
    <ecl-pagination-item
      path="${randomizedLink('/example.html')}"
      aria-label="Page 26"
      current
    >
      26
    </ecl-pagination-item>
    <ecl-pagination-item
      path="${randomizedLink('/example.html')}"
      aria-label="Page 27"
    >
      27
    </ecl-pagination-item>
    <ecl-pagination-item
      current-page
      aria-label="Page 28"
    >
      28
    </ecl-pagination-item>
    <ecl-pagination-item
      truncation
     >
     </ecl-pagination-item>
    <ecl-pagination-item
      path="${randomizedLink('/example.html')}"
      aria-label="Page 40"
    >
      40
    </ecl-pagination-item>
    <ecl-pagination-item
      next
      aria-label="Next page"
    >
      Next
    </ecl-pagination-item>
  </ecl-pagination>`;

export const Pagination = Template.bind({});
Pagination.storyName = 'default';
Pagination.argTypes = {
  color_mode: {
    table: { disable: true },
  },
}

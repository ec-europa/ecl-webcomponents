export default {
  title: 'Components/Navigation/pagination',
};

const Template = args =>
  `<ecl-pagination
    theme="${args.theme}"
  >
    <ecl-pagination-item
      path="/example"
      theme="${args.theme}"
      aria-label="Previous page"
      previous
    >
      Previous
    </ecl-pagination-item>
    <ecl-pagination-item
      theme="${args.theme}"
      path="/example"
      aria-label="Page 24"
     >
      24
     </ecl-pagination-item>
    <ecl-pagination-item
      path="/example"
      theme="${args.theme}"
      aria-label="Page 25"
    >
      25
    </ecl-pagination-item>
    <ecl-pagination-item
      path="/example"
      theme="${args.theme}"
      aria-label="Page 26"
      current
    >
      26
    </ecl-pagination-item>
    <ecl-pagination-item
      path="/example"
      theme="${args.theme}"
      aria-label="Page 27"
    >
      27
    </ecl-pagination-item>
    <ecl-pagination-item
      current-page
      theme="${args.theme}"
      aria-label="Page 28"
    >
      28
    </ecl-pagination-item>
    <ecl-pagination-item
      theme="${args.theme}"
      next
      aria-label="Next page"
    >
      Next
    </ecl-pagination-item>
  </ecl-pagination>`;

export const Pagination = Template.bind({});
Pagination.storyName = 'default';

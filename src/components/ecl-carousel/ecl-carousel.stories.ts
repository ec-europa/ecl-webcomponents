export default {
  title: 'Components/carousel',
};

const Template = (args) => 
`<ecl-carousel
  carousel-id="ecl-carousel-demo"
  ecl-script
  slides-number="3"
>
  <ecl-carousel-item
    banner-variant="image"
    theme="${args.theme}"
    cta-link="/example.html"
    cta-label="Subscribe"
    centered=false
    image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
    banner-title="Duis vitae pulvinar turpis"
  >
    Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
  </ecl-carousel-item>
  <ecl-carousel-item
    banner-variant="image-shade"
    theme="${args.theme}"
    cta-link="/example.html"
    cta-label="Subscribe"
    centered=false
    image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
    banner-title="Duis vitae pulvinar turpis"
  >
    Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
  </ecl-carousel-item>
  <ecl-carousel-item
    banner-variant="image-gradient"
    theme="${args.theme}"
    cta-link="/example.html"
    cta-label="Subscribe"
    image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
    banner-title="Duis vitae pulvinar turpis"
  >
    Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
  </ecl-carousel-item>
</ecl-carousel>`;

export const Carousel = Template.bind({});
Carousel.storyName = 'default';
Carousel.args = {
  theme: 'ec',
  withUtils: true,
};

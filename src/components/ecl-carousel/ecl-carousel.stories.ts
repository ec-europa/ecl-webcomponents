import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    size: 'm',
    fullWidth: false,
  };
};

const getArgTypes = () => {
  return {
    size: {
      type: { name: 'select'},
      options: [
        's', 'm', 'l',
      ],
      description: 'Size of the carousel (s, m, l)',
    },
    fullWidth: {
      name: 'full width',
      control: { name: 'boolean' },
      description: 'Make the component full width when in container',
    }
  };
};

export default {
  title: 'Components/carousel',
  parameters: {
    badges: [
      'updated',
    ],  
  },
};

const Template = (args) => 
  `<ecl-carousel
    carousel-id="ecl-carousel-demo"
    ecl-script
    slides-number=3
    full-width="${args.fullWidth}"
  >
    <ecl-carousel-item
      cta-link="${randomizedLink('/example.html')}"
      cta-label="Subscribe"
      size="${args.size}"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
      banner-title="Duis vitae pulvinar turpis"
      credit="© Copyright or credit"
    >
      Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
    </ecl-carousel-item>
    <ecl-carousel-item
      cta-link="${randomizedLink('/example.html')}"
      cta-label="Subscribe"
      size="${args.size}"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
      banner-title="Duis vitae pulvinar turpis"
    >
      Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
    </ecl-carousel-item>
    <ecl-carousel-item
      cta-link="${randomizedLink('/example.html')}"
      size="${args.size}"
      cta-label="Subscribe"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
      banner-title="Duis vitae pulvinar turpis"
      credit="© Copyright or credit"
    >
      Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
    </ecl-carousel-item>
  </ecl-carousel>`;

export const Carousel = Template.bind({});
Carousel.storyName = 'default';
Carousel.args = getArgs();
Carousel.argTypes = getArgTypes();

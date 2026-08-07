import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => ({
  elTitle: 'Find your next role',
  description: 'Discover job opportunities in the EU institutions',
  suggestionLabel: 'Or explore:',
  helperText: `Enter the job you're looking for`,
  submitLabel: 'Search',
});
  
const getArgTypes = () => ({
  elTitle: {
    name: 'title',
    type: { name: 'string' },
    description: 'Title of the component',
  },
  description: {
    type: { name: 'string' },
    description: 'Description of the component',
  },
  suggestionLabel: {
    name: 'suggestion-label',
    type: { name: 'string' },
    description: 'Label of the suggestiuns',
  },
  helperText: {
    name: 'helper-text',
    type: { name: 'string' },
    description: 'Helper text of teh input',
  },
  submitLabel: {
    name: 'submit-label',
    type: { name: 'string' },
    description: 'Label of the submit button',
  },
});
  
export default {
  title: 'Components/highlighted search',
  argTypes: getArgTypes(),
  args: getArgs(),
  decorators: [
    (storyFn) => {
      return `<ecl-grid container>${storyFn()}</ecl-grid>`;
    },
  ],
};

const Template = (args) => {
return `<ecl-highlighted-search
          el-title="${args.elTitle}"
          suggestion-label="${args.suggestionLabel}"
          helper-text="${args.helperText}"
          has-description
          submit-label="${args.submitLabel}"
          color-mode="${args.color_mode}"
        >
          ${args.description}
          <ecl-tag
            slot="tags"
            variant="link"
            url="${randomizedLink('/example.html')}"
          >
            Trainesheep
          </ecl-tag>
          <ecl-tag
            slot="tags"
            variant="link"
            url="${randomizedLink('/example.html')}"
          >
            It & Digital
          </ecl-tag>
          <ecl-tag
            slot="tags"
            variant="link"
            url="${randomizedLink('/example.html')}"
          >
            Policy and law
          </ecl-tag>
          <ecl-tag
            slot="tags"
            variant="link"
            url="${randomizedLink('/example.html')}"
          >
            Tranlation
          </ecl-tag>
          <ecl-tag
            slot="tags"
            variant="link"
            url="${randomizedLink('/example.html')}"
          >
            Communication
          </ecl-tag>
          <ecl-tag
            slot="tags"
            variant="link"
            url="${randomizedLink('/example.html')}"
          >
            Finance and Economics
          </ecl-tag>
        </ecl-highlighted-search>`;
  };
  
  export const Default = Template.bind({});
  Default.storyName = 'Default';
  
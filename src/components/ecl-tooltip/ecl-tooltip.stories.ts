import { randomizedLink } from "../../utils/randomizedLink";

export default {
  title: 'Components/tooltip',
};

const Template = () => 
  `<ecl-tooltip></ecl-tooltip>
    <div style="width: 200px; margin-inline: auto;">
      <ecl-link data-ecl-tooltip title-attr="Tooltip for a link" path="${randomizedLink('/example.html')}">Test me on a link</ecl-link>
    </div>
    <div style="margin-inline-end: auto;">
      <ecl-button variant="primary" data-ecl-tooltip="Tooltip for a button">Test me on a button</ecl-button>
    </div>
    <div style="margin-inline-start: auto; background: black; width: 190px; padding: 4rem;">
      <ecl-button variant="primary style="highlight" data-ecl-tooltip-inverted="Tooltip inverted">On a background</ecl-button>
    </div`;

export const Tooltip = Template.bind({});
Tooltip.storyName = 'default';
Tooltip.argTypes = {
  color_mode: { table: { disable: true } },
};
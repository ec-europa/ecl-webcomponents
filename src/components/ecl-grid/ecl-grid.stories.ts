const getArgs = () => {
  return {
    columns: '6',
    breakpoint: '',
    row: false,
    container: false,
    styleClass: '',
  };
};

const getArgTypes = () => {
  return {
    color_mode: {
      table: { disable: true },
    },
    theme: {
      table: { disable: true },
    },
    columns: {
      name: 'columns',
      description: 'Number of columns (1-12) or JSON object for responsive columns. Example: {"s": 12, "m": 6, "l": 4}',
      control: { type: 'text' },
      if: { arg: 'container', truthy: false },
    },
    breakpoint: {
      name: 'breakpoint',
      control: { type: 'select' },
      options: ['', 's', 'm', 'l', 'xl'],
      description: 'Breakpoint for legacy API (s, m, l, xl). Leave empty for mobile-first.',
      if: { arg: 'columns', truthy: true },
    },
    row: {
      name: 'row',
      control: { type: 'boolean' },
      description: 'Creates a row container (wrapper for columns)',
      if: { arg: 'columns', truthy: false },
    },
    container: {
      name: 'container',
      control: { type: 'boolean' },
      description: 'Creates a container (fixed-width wrapper)',
      if: { arg: 'columns', truthy: false },
    },
    styleClass: {
      name: 'style-class',
      control: { type: 'text' },
      description: 'Additional CSS classes to apply',
    },
  };
};

const withGridStyles = (Story) => {
  if (typeof document !== 'undefined' && !document.getElementById('ecl-grid-story-styles')) {
    const style = document.createElement('style');
    style.id = 'ecl-grid-story-styles';
    style.textContent = `
      .demo-cell {
        background-color: #e8e8e8;
        border: 1px solid #999;
        padding: 12px;
        text-align: center;
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .demo-cell.sidebar {
        background-color: #f29200;
      }
      .container-demo {
        background-color: #f5f5f5;
        padding: 20px;
        border: 2px dashed #999;
      }
    `;
    document.head.appendChild(style);
  }

  return Story();
};

export default {
  title: 'Components/Grid',
  decorators: [withGridStyles],
  parameters: {
    docs: {
      description: {
        component: 'ECL Grid Component - Flexible layout system for creating responsive column-based layouts.',
      },
    },
  },
  argTypes: getArgTypes(),
  args: getArgs(),
};

const Template = (args) => {
  const attrs = [
    args.row ? 'row' : '',
    args.container ? 'container' : '',
    args.columns ? `columns="${args.columns}"` : '',
    args.breakpoint ? `breakpoint="${args.breakpoint}"` : '',
    args.styleClass ? `style-class="${args.styleClass}"` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `<ecl-grid ${attrs}><div class="demo-cell">Column 1</div></ecl-grid>`;
};

export const TwelveColumns = Template.bind({});
TwelveColumns.storyName = 'Single container';
TwelveColumns.args = {
  columns: '',
};

// Legacy API with breakpoint
export const LegacyWithBreakpoint = () => `
  <ecl-grid container>
    <ecl-grid row>
      <ecl-grid breakpoint="m" columns="6">
        <div class="demo-cell">6 cols on medium</div>
      </ecl-grid>
      <ecl-grid breakpoint="m" columns="6">
        <div class="demo-cell">6 cols on medium</div>
      </ecl-grid>
    </ecl-grid>
  </ecl-grid>
`;
LegacyWithBreakpoint.storyName = 'Responsive columns (single selector)';
LegacyWithBreakpoint.parameters = { controls: { disable: true } };

// Responsive columns using JSON format
export const ResponsiveColumns = () => `
  <ecl-grid container>
    <ecl-grid row>
      <ecl-grid columns='{"s": 12, "m": 6, "l": 4, "xl": 3}'>
        <div class="demo-cell">Full on mobile, half on tablet, third on desktop, quarter on wide</div>
      </ecl-grid>
      <ecl-grid columns='{"s": 12, "m": 6, "l": 4, "xl": 3}'>
        <div class="demo-cell">Full on mobile, half on tablet, third on desktop, quarter on wide</div>
      </ecl-grid>
      <ecl-grid columns='{"s": 12, "m": 6, "l": 4, "xl": 3}'>
        <div class="demo-cell">Full on mobile, half on tablet, third on desktop, quarter on wide</div>
      </ecl-grid>
      <ecl-grid columns='{"s": 12, "m": 6, "l": 4, "xl": 3}'>
        <div class="demo-cell">Full on mobile, half on tablet, third on desktop, quarter on wide</div>
      </ecl-grid>
    </ecl-grid>
  </ecl-grid>
`;
ResponsiveColumns.storyName = 'Responsive Columns (multiple selectors)';
ResponsiveColumns.parameters = {
  controls: { disable: true },
};

export const ComplexResponsiveLayout = () => `
  <ecl-grid container>
    <ecl-grid row>
      <ecl-grid columns='{"s": 12, "m": 12, "l": 4}'>
        <div class="demo-cell sidebar">Sidebar (4 cols on desktop)</div>
      </ecl-grid>
      <ecl-grid columns='{"s": 12, "m": 12, "l": 8}'>
        <div class="demo-cell">Main Content (8 cols on desktop)</div>
      </ecl-grid>
    </ecl-grid>
  </ecl-grid>
`;
ComplexResponsiveLayout.storyName = 'Example Layout: Main + Sidebar';
ComplexResponsiveLayout.parameters = {
  controls: { disable: true },
};

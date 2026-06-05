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

export default {
  title: 'Components/Grid',
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

const Template = (args) => `
  <style>
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
  </style>
  <ecl-grid ${args.row ? 'row' : ''} ${args.container ? 'container' : ''} ${args.columns ? `columns="${args.columns}"` : ''} ${args.breakpoint ? `breakpoint="${args.breakpoint}"` : ''} ${args.styleClass ? `style-class="${args.styleClass}"` : ''}>
    <div class="demo-cell">Column 1</div>
  </ecl-grid>
`;

export const TwelveColumns = Template.bind({});
TwelveColumns.storyName = 'Single container';
TwelveColumns.args = {
  columns: '',
};

// Legacy API with breakpoint
export const LegacyWithBreakpoint = () => `
  <style>
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
  </style>
  <ecl-grid row>
    <ecl-grid breakpoint="m" columns="6">
      <div class="demo-cell">6 cols on medium</div>
    </ecl-grid>
    <ecl-grid breakpoint="m" columns="6">
      <div class="demo-cell">6 cols on medium</div>
    </ecl-grid>
  </ecl-grid>
`;
LegacyWithBreakpoint.storyName = 'Legacy API: Breakpoint + Columns';
LegacyWithBreakpoint.parameters = {   controls: { disable: true } };

// Responsive columns using JSON format
export const ResponsiveColumns = () => `
  <style>
    .demo-cell {
      background-color: #3b9fd9;
      color: white;
      border: 1px solid #0066cc;
      padding: 12px;
      text-align: center;
      min-height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
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
`;
ResponsiveColumns.storyName = 'Responsive Columns (JSON Format)';
ResponsiveColumns.parameters = {
  controls: { disable: true },
};

// Complex responsive layout
export const ComplexResponsiveLayout = () => `
  <style>
    .demo-cell {
      background-color: #3b9fd9;
      color: white;
      border: 1px solid #0066cc;
      padding: 12px;
      text-align: center;
      min-height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .demo-cell.sidebar {
      background-color: #f29200;
    }
  </style>
  <ecl-grid row>
    <ecl-grid columns='{"s": 12, "m": 12, "l": 8}'>
      <div class="demo-cell">Main Content (8 cols on desktop)</div>
    </ecl-grid>
    <ecl-grid columns='{"s": 12, "m": 12, "l": 4}'>
      <div class="demo-cell sidebar">Sidebar (4 cols on desktop)</div>
    </ecl-grid>
  </ecl-grid>
`;
ComplexResponsiveLayout.storyName = 'Complex Layout: Main + Sidebar';
ComplexResponsiveLayout.parameters = {
  controls: { disable: true },
};

// Container mode
export const ContainerMode = () => `
  <style>
    .demo-cell {
      background-color: #3b9fd9;
      color: white;
      border: 1px solid #0066cc;
      padding: 12px;
      text-align: center;
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container-demo {
      background-color: #f5f5f5;
      padding: 20px;
      border: 2px dashed #999;
    }
  </style>
  <div class="container-demo">
    <ecl-grid container>
      <ecl-grid row>
        <ecl-grid columns='{"s": 12, "m": 6, "l": 3}'>
          <div class="demo-cell">Col 1</div>
        </ecl-grid>
        <ecl-grid columns='{"s": 12, "m": 6, "l": 3}'>
          <div class="demo-cell">Col 2</div>
        </ecl-grid>
        <ecl-grid columns='{"s": 12, "m": 6, "l": 3}'>
          <div class="demo-cell">Col 3</div>
        </ecl-grid>
        <ecl-grid columns='{"s": 12, "m": 6, "l": 3}'>
          <div class="demo-cell">Col 4</div>
        </ecl-grid>
      </ecl-grid>
    </ecl-grid>
  </div>
`;
ContainerMode.storyName = 'Container Mode';
ContainerMode.parameters = {
  controls: { disable: true },
};


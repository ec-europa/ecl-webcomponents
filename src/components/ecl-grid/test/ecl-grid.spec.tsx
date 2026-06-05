import { newSpecPage } from '@stencil/core/testing';
import { EclGrid } from '../ecl-grid';

describe('ecl-grid', () => {
  it('renders with basic column configuration', async () => {
    const page = await newSpecPage({
      components: [EclGrid],
      html: `<div class="ecl-container">
              <ecl-grid columns="6">Content in 6 columns</ecl-grid>
              <ecl-grid columns="4">Content in 4 columns</ecl-grid>
              <ecl-grid columns="2">Content in 2 columns</ecl-grid>
            </div>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders with breakpoint and columns (backward compatibility)', async () => {
    const page = await newSpecPage({
      components: [EclGrid],
      html: `<div class="ecl-container">
              <ecl-grid breakpoint="m" columns="6">Content in 6 columns on md</ecl-grid>
              <ecl-grid breakpoint="l" columns="4">Content in 4 columns on lg</ecl-grid>
            </div>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders with responsive columns (new API)', async () => {
    const page = await newSpecPage({
      components: [EclGrid],
      html: `<div class="ecl-container">
              <ecl-grid columns='{"s": 12, "m": 6, "l": 4, "xl": 3}'>Responsive grid item</ecl-grid>
              <ecl-grid columns='{"s": 12, "m": 6, "l": 4, "xl": 3}'>Responsive grid item</ecl-grid>
              <ecl-grid columns='{"s": 12, "m": 6, "l": 4, "xl": 3}'>Responsive grid item</ecl-grid>
            </div>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders with responsive columns and style class', async () => {
    const page = await newSpecPage({
      components: [EclGrid],
      html: `<div class="ecl-container">
              <ecl-grid columns='{"s": 12, "m": 6, "l": 3}' style-class="ecl-u-p-m">Content with padding</ecl-grid>
            </div>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders as row container', async () => {
    const page = await newSpecPage({
      components: [EclGrid],
      html: `<ecl-grid row>
              <ecl-grid columns="6">Column 1</ecl-grid>
              <ecl-grid columns="6">Column 2</ecl-grid>
            </ecl-grid>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders as container', async () => {
    const page = await newSpecPage({
      components: [EclGrid],
      html: `<ecl-grid container>
              <div>Content inside container</div>
            </ecl-grid>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});

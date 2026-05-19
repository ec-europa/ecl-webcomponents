    import { newSpecPage } from '@stencil/core/testing';
import { EclAddToCalendar } from '../ecl-add-to-calendar';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-add-to-calendar', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });
  
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclAddToCalendar, EclIcon],
      html: `<ecl-add-to-calendar 
              color-mode="purple-violet"
              event-title="Event coming soon!"
              full-width
              meta='[{"label": "March 15-17 2026", "icon": "calendar"}, {"label": "2:00 PM - 4:00 PM", "icon": "clock"}, {"label": "San Francisco, CA", "icon": "location"}]'
            >
            </ecl-add-to-calendar>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});

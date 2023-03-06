import { newSpecPage } from '@stencil/core/testing';
import { EclRatingField } from '../ecl-rating-field';
import { EclRatingStar } from '../ecl-rating-star';

describe('ecl-rating-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclRatingField, EclRatingStar],
      html: `<ecl-rating-field
        required
        theme="ec"
      >
        <ecl-rating-star
          theme="ec"
          value="1"
          item-id="item-id-1"
          label="1 stars"
          required
        >
        </ecl-rating-star>
        <ecl-rating-star
          theme="ec"
          value="2"
          item-id="item-id-2"
          label="2 stars"
          required
        >
        </ecl-rating-star>
        <ecl-rating-star
          theme="ec"
          value="3"
          item-id="item-id-3"
          label="3 stars"
          required
        >
        </ecl-rating-star>
        <ecl-rating-star
          theme="ec"
          value="4"
          item-id="item-id-4"
          label="4 stars"
          required
        >
        </ecl-rating-star>
        <ecl-rating-star
          theme="ec"
          value="5"
          item-id="item-id-5"
          label="5 stars"
          required
        >
        </ecl-rating-star>
      </ecl-rating-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
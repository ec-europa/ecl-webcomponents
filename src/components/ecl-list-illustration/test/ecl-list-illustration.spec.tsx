import { newSpecPage } from '@stencil/core/testing';
import { EclListIllustration } from '../ecl-list-illustration';
import { EclListIllustrationItem } from '../ecl-list-illustration-item';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-list-illustration', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclListIllustration, EclListIllustrationItem, EclIcon],
      html: `<ecl-list-illustration
        theme="ec"
        zebra=true
        column="1"
      >
        <ecl-list-illustration-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          item-title="List with illustration item 1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
          Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
          in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
        </ecl-list-illustration-item>
        <ecl-list-illustration-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          item-title="List with illustration item 2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
          Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
          in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
        </ecl-list-illustration-item>
        <ecl-list-illustration-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          item-title="List with illustration item 3"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
          Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
          in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
        </ecl-list-illustration-item>
        <ecl-list-illustration-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          item-title="List with illustration item 4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
          Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
          in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
        </ecl-list-illustration-item>
        <ecl-list-illustration-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          item-title="List with illustration item 5"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
          Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
          in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
        </ecl-list-illustration-item>
      </ecl-list-illustration>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});

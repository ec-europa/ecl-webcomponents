import { loremIpsum } from 'lorem-ipsum';

const lorem = loremIpsum({ count: 25 });

export default {
  title: 'Components/Navigation/inpage-navigation',
};

const Template = args =>
`<div class="ecl-container">
  <div class="ecl-row ecl-u-mt-l" data-ecl-inpage-navigation-container>
    <div class="ecl-col-l-3">
      <ecl-inpage-navigation
        inpage-title="Page contents"
        inpage-id="inpage-id"
        theme="${args.theme}"
        ecl-script
        with-utils
      >
        <ecl-inpage-navigation-item
          path="#inline-nav-1"
        >
          Heading 1
        </ecl-inpage-navigation-item>
        <ecl-inpage-navigation-item
          path="#inline-nav-2"
        >
          Heading 2 with a long title going on several lines
        </ecl-inpage-navigation-item>
        <ecl-inpage-navigation-item
          path="#inline-nav-3"
        >
          Heading 3
        </ecl-inpage-navigation-item>
        <ecl-inpage-navigation-item
          path="inline-nav-4"
        >
          Heading 4
        </ecl-inpage-navigation-item>
      </ecl-inpage-navigation>
    </div>
    <div class="ecl-col-l-9">
      <h2 class="ecl-u-type-heading-2" id="inline-nav-1">Heading 1</h2>
      <p class="ecl-u-type-paragraph-m">${lorem}</p>
      <p class="ecl-u-type-paragraph-m">${lorem}</p>
      <h2 class="ecl-u-type-heading-2" id="inline-nav-2">Heading 2</h2>
      <p class="ecl-u-type-paragraph-m">${lorem}</p>
      <p class="ecl-u-type-paragraph-m">${lorem}</p>
      <h2 class="ecl-u-type-heading-2" id="inline-nav-3">Heading 3</h2>
      <p class="ecl-u-type-paragraph-m">${lorem}</p>
      <h2 class="ecl-u-type-heading-2" id="inline-nav-4">Heading 4</h2>
      <p class="ecl-u-type-paragraph-m">${lorem}</p>
    </div>
  </div>
</div>`;

export const InpageNavigation = Template.bind({});
InpageNavigation.storyName = 'default';
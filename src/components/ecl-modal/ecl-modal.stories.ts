const getArgs = () => ({
  variant: 'default',
  size: 'l',
});

const getArgTypes = () => ({
  color_mode: { table: { disable: true}},
  variant: {
    type: { name: 'select' },
    description: 'modal variant',
    options: [
      'default',
      'information',
      'success',
      'warning',
    ],
  },
  size: {
    type: { name: 'select' },
    description: 'The width of the modal',
    options: ['s', 'm', 'l', 'full'],
    control: {
      labels: {
        s: 'small',
        m: 'medium',
        l: 'large',
        full: 'full container',
      },
    },
    mapping: {
      small: 's',
      medium: 'm',
      large: 'l',
      'full container': 'full',
    },
  },
});

export default {
  title: 'Components/modal',
};

const Template = args =>
  `<ecl-button
    type="button"
    item-id="modal-demo-toggle"
    variant="secondary"
  >
    Open modal
  </ecl-button>
  <ecl-modal
    variant="${args.variant}"
    size="${args.size}"
    with-header
    with-footer
    with-body
    with-body-fixed
    toggle-id="modal-demo-toggle"
    close-label="Close"
    item-title="Modal title"
  > 
    <ecl-text slot="body" tag="p">
      Scrollable content:
      <br>
      Sed quam augue, volutpat sed dapibus in, accumsan a arcu. Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui. Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet. Morbi interdum orci arcu, tempor porta nisl elementum non. Morbi blandit risus sed turpis mollis mattis. Maecenas semper, risus nec sollicitudin aliquet, dui eros vehicula nulla, ac bibendum mauris mauris a lectus. Ut ut justo in sem vestibulum mollis. Pellentesque ac commodo erat. Phasellus vitae aliquet mi. Suspendisse sed nisl feugiat, porta ante a, finibus nisi.
      Sed quam augue, volutpat sed dapibus in, accumsan a arcu. Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui. Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet. Morbi interdum orci arcu, tempor porta nisl elementum non. Morbi blandit risus sed turpis mollis mattis. Maecenas semper, risus nec sollicitudin aliquet, dui eros vehicula nulla, ac bibendum mauris mauris a lectus. Ut ut justo in sem vestibulum mollis. Pellentesque ac commodo erat. Phasellus vitae aliquet mi. Suspendisse sed nisl feugiat, porta ante a, finibus nisi.
    </ecl-text>
    <div slot="body-fixed">
      <ecl-input
        type="checkbox"
        name="checkbox-default"
        input-class="ecl-checkbox__input"
        input-id="checkbox-default-1"
        label="Option label"
      ></ecl-input>
    </div>
    <div slot="footer" style="display: flex;">
      <ecl-button
        type="button"
        variant="secondary"
        size="m"
        style-class="ecl-modal__button sc-ecl-modal-${args.theme}"
      >
        Button
      </ecl-button>
      <ecl-button
        type="submit"
        variant="primary"
        size="m"
        style-class="ecl-modal__button sc-ecl-modal-${args.theme}"
      >
        Button
      </ecl-button>
    </div>
  </ecl-modal>`;

export const Modal = Template.bind({});
Modal.storyName = 'default';
Modal.args = getArgs();
Modal.argTypes = getArgTypes();

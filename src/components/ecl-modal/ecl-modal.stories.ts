const getArgs = () => ({
  variant: 'default',
});

const getArgTypes = () => ({
  variant: {
    type: { name: 'select' },
    description: 'modal variant',
    options: [
      'default',
      'information',
      'success',
      'warning',
    ],
  }
});

export default {
  title: 'Components/modal',
};

const Template = args =>
  `<ecl-button
    type="button"
    item-id="modal-demo-toggle"
    theme="${args.theme}"
  >
    Open modal
  </ecl-button>
  <ecl-modal
    theme="${args.theme}"
    variant="${args.variant}"
    with-header
    with-footer
    with-body
    ecl-script
    toggle-id="modal-demo-toggle"
    close-label="Close"
  >
    <ecl-text slot="header" theme="${args.theme}" tag="span">Lorem ipsum dolor sit amet</ecl-text>
    <div slot="body">Sed quam augue, volutpat sed dapibus in, accumsan a arcu. 
      Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui.
      Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet.
    </div>
    <div slot="footer">
      <ecl-button
        theme="${args.theme}"
        type="submit"
        variant="primary"
        style-class="ecl-modal__button"
      >
        Primary action
      </ecl-button>
      <ecl-button
        theme="${args.theme}"
        type="button"
        variant="secondary"
        style-class="ecl-modal__button"
      >
        Secondary action
      </ecl-button>
    </div>
  </ecl-modal>`;

export const Modal = Template.bind({});
Modal.storyName = 'default';
Modal.args = getArgs();
Modal.argTypes = getArgTypes();

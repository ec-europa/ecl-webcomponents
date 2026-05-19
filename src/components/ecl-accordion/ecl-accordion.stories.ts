export default {
  title: 'Components/accordion',
};

const Template = (args) => 
  `<ecl-accordion 
    color-mode="${args.color_mode}"
  >
    <ecl-accordion-item
      label="Protecting citizens and freedoms"
    >
      Ensuring effective control of the EU's external borders and further developing a comprehensive migration policy. 
      Fighting terrorism and cross-border/online crime, increasing the EU's resilience against both natural and human-made disasters.
    </ecl-accordion-item>

    <ecl-accordion-item
      label="Developing a strong and vibrant economic base"
      expanded
    >
      Building a resilient economy by deepening the Economic and Monetary Union to ensure that Europe is better prepared for future shocks, completing the banking and capital markets union, 
      strengthening the international role of the euro, investing in skills and education, supporting Europe's businesses, embracing digital transformation, and developing a robust industrial policy.
    </ecl-accordion-item>

    <ecl-accordion-item
      label="Building a climate-neutral, green, fair and social Europe"
    >
      Investing in green initiatives that improve air and water quality, promote sustainable agriculture and preserve environmental systems and biodiversity.
      Creating an effective circular economy (where products are designed to be more durable, reusable, repairable, recyclable and energy-efficient) and a well-functioning EU energy market that provides sustainable, secure and affordable energy.
      A faster transition to renewables and energy efficiency, while reducing the EU's dependency on outside energy sources.
      Implementing the European Pillar of Social Rights.
    </ecl-accordion-item>

    <ecl-accordion-item
      label="Promoting European interests and values on the global stage"
    >
      Building a robust foreign policy based on an ambitious neighbourhood policy with 16 of its closest eastern and southern neighbours and a comprehensive partnership with Africa.
      Promoting global peace, stability, democracy and human rights. Ensuring a robust trade policy in line with multilateralism and the global rules-based international order. Taking greater responsibility for security and defence, while cooperating closely with NATO.
    </ecl-accordion-item
  </ecl-accordion>`;

export const Accordion = Template.bind({});
Accordion.storyName = 'default';

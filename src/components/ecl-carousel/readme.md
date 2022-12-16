# ecl-carousel



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type     | Default     |
| --------------- | ---------------- | ----------- | -------- | ----------- |
| `ariaLabel`     | `aria-label`     |             | `string` | `undefined` |
| `bannerTitle`   | `banner-title`   |             | `string` | `''`        |
| `bannerVariant` | `banner-variant` |             | `string` | `''`        |
| `ctaLabel`      | `cta-label`      |             | `string` | `undefined` |
| `ctaLink`       | `cta-link`       |             | `string` | `undefined` |
| `image`         | `image`          |             | `string` | `''`        |
| `styleClass`    | `style-class`    |             | `string` | `''`        |
| `theme`         | `theme`          |             | `string` | `'ec'`      |


## Dependencies

### Depends on

- [ecl-page-banner](../ecl-page-banner)

### Graph
```mermaid
graph TD;
  ecl-carousel-item --> ecl-page-banner
  ecl-page-banner --> ecl-link
  ecl-page-banner --> ecl-icon
  ecl-link --> ecl-icon
  style ecl-carousel-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

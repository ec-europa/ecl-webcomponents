# ecl-carousel



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default     |
| --------------- | ---------------- | ----------- | --------- | ----------- |
| `ariaLabel`     | `aria-label`     |             | `string`  | `undefined` |
| `bannerTitle`   | `banner-title`   |             | `string`  | `''`        |
| `bannerVariant` | `banner-variant` |             | `string`  | `''`        |
| `centered`      | `centered`       |             | `boolean` | `undefined` |
| `ctaLabel`      | `cta-label`      |             | `string`  | `undefined` |
| `ctaLink`       | `cta-link`       |             | `string`  | `undefined` |
| `image`         | `image`          |             | `string`  | `''`        |
| `size`          | `size`           |             | `string`  | `'m'`       |
| `styleClass`    | `style-class`    |             | `string`  | `''`        |
| `theme`         | `theme`          |             | `string`  | `'ec'`      |


## Dependencies

### Depends on

- [ecl-banner](../ecl-banner)

### Graph
```mermaid
graph TD;
  ecl-carousel-item --> ecl-banner
  ecl-banner --> ecl-picture
  ecl-banner --> ecl-link
  ecl-banner --> ecl-icon
  ecl-link --> ecl-icon
  ecl-link --> ecl-indicator
  style ecl-carousel-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

# ecl-page-banner



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type      | Default     |
| ------------- | -------------- | ----------- | --------- | ----------- |
| `bannerTitle` | `banner-title` |             | `string`  | `undefined` |
| `centered`    | `centered`     |             | `boolean` | `true`      |
| `credit`      | `credit`       |             | `string`  | `undefined` |
| `ctaLabel`    | `cta-label`    |             | `string`  | `undefined` |
| `ctaLink`     | `cta-link`     |             | `string`  | `undefined` |
| `external`    | `external`     |             | `boolean` | `false`     |
| `fullWidth`   | `full-width`   |             | `boolean` | `false`     |
| `image`       | `image`        |             | `string`  | `undefined` |
| `styleClass`  | `style-class`  |             | `string`  | `undefined` |
| `theme`       | `theme`        |             | `string`  | `'ec'`      |
| `variant`     | `variant`      |             | `string`  | `'display'` |


## Dependencies

### Used by

 - [ecl-carousel-item](../ecl-carousel)

### Depends on

- [ecl-link](../ecl-link)
- [ecl-icon](../ecl-icon)

### Graph
```mermaid
graph TD;
  ecl-page-banner --> ecl-link
  ecl-page-banner --> ecl-icon
  ecl-link --> ecl-icon
  ecl-carousel-item --> ecl-page-banner
  style ecl-page-banner fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

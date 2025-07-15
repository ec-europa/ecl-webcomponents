# ecl-breadcrumb-item



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type      | Default     |
| ----------------- | ------------------- | ----------- | --------- | ----------- |
| `buttonAriaLabel` | `button-aria-label` |             | `string`  | `''`        |
| `currentPage`     | `current-page`      |             | `boolean` | `false`     |
| `ellipsis`        | `ellipsis`          |             | `boolean` | `false`     |
| `path`            | `path`              |             | `string`  | `''`        |
| `styleClass`      | `style-class`       |             | `string`  | `''`        |
| `theme`           | `theme`             |             | `string`  | `undefined` |


## Dependencies

### Used by

 - [ecl-breadcrumb](.)

### Depends on

- [ecl-link](../ecl-link)
- [ecl-button](../ecl-button)
- [ecl-icon](../ecl-icon)

### Graph
```mermaid
graph TD;
  ecl-breadcrumb-item --> ecl-link
  ecl-breadcrumb-item --> ecl-button
  ecl-breadcrumb-item --> ecl-icon
  ecl-link --> ecl-icon
  ecl-button --> ecl-indicator
  ecl-breadcrumb --> ecl-breadcrumb-item
  style ecl-breadcrumb-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

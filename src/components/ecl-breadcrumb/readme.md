# ecl-breadcrumb-item



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type      | Default     |
| ----------------- | ------------------- | ----------- | --------- | ----------- |
| `buttonAriaLabel` | `button-aria-label` |             | `string`  | `''`        |
| `currentPage`     | `current-page`      |             | `boolean` | `false`     |
| `ellipsis`        | `ellipsis`          |             | `boolean` | `false`     |
| `path`            | `path`              |             | `string`  | `undefined` |
| `styleClass`      | `style-class`       |             | `string`  | `undefined` |
| `theme`           | `theme`             |             | `string`  | `'ec'`      |
| `variant`         | `variant`           |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [ecl-link](../ecl-link)
- [ecl-icon](../ecl-icon)
- [ecl-button](../ecl-button)

### Graph
```mermaid
graph TD;
  ecl-breadcrumb-item --> ecl-link
  ecl-breadcrumb-item --> ecl-icon
  ecl-breadcrumb-item --> ecl-button
  ecl-link --> ecl-icon
  ecl-button --> ecl-indicator
  style ecl-breadcrumb-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

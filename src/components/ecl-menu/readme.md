# ecl-menu



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description | Type      | Default     |
| ------------------ | -------------------- | ----------- | --------- | ----------- |
| `child`            | `child`              |             | `boolean` | `false`     |
| `current`          | `current`            |             | `boolean` | `false`     |
| `external`         | `external`           |             | `boolean` | `false`     |
| `hasChildren`      | `has-children`       |             | `boolean` | `false`     |
| `link`             | `link`               |             | `string`  | `undefined` |
| `styleClass`       | `style-class`        |             | `string`  | `undefined` |
| `theme`            | `theme`              |             | `string`  | `'ec'`      |
| `triggerAriaLabel` | `trigger-aria-label` |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [ecl-icon](../ecl-icon)
- [ecl-button](../ecl-button)

### Graph
```mermaid
graph TD;
  ecl-menu-item --> ecl-icon
  ecl-menu-item --> ecl-button
  ecl-button --> ecl-indicator
  style ecl-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

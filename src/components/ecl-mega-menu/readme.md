# ecl-mega-menu-item



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute        | Description | Type      | Default     |
| -------------------- | ---------------- | ----------- | --------- | ----------- |
| `external`           | `external`       |             | `boolean` | `false`     |
| `featuredTitle`      | `featured-title` |             | `string`  | `undefined` |
| `hasChildren`        | `has-children`   |             | `boolean` | `false`     |
| `hasFeatured`        | `has-featured`   |             | `boolean` | `false`     |
| `label` _(required)_ | `label`          |             | `string`  | `undefined` |
| `oneLevelOnly`       | `one-level-only` |             | `boolean` | `false`     |
| `path`               | `path`           |             | `string`  | `undefined` |
| `seeAll`             | `see-all`        |             | `boolean` | `false`     |
| `seeAllLabel`        | `see-all-label`  |             | `string`  | `undefined` |
| `styleClass`         | `style-class`    |             | `string`  | `undefined` |
| `theme`              | `theme`          |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [ecl-button](../ecl-button)
- [ecl-icon](../ecl-icon)
- [ecl-link](../ecl-link)

### Graph
```mermaid
graph TD;
  ecl-mega-menu-subitem --> ecl-button
  ecl-mega-menu-subitem --> ecl-icon
  ecl-mega-menu-subitem --> ecl-link
  ecl-button --> ecl-indicator
  ecl-link --> ecl-icon
  ecl-link --> ecl-indicator
  style ecl-mega-menu-subitem fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

# ecl-social-media-follow



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default        |
| ------------ | ------------- | ----------- | --------- | -------------- |
| `color`      | `color`       |             | `string`  | `'monochrome'` |
| `family`     | `family`      |             | `string`  | `'networks'`   |
| `hideLabel`  | `hide-label`  |             | `boolean` | `false`        |
| `icon`       | `icon`        |             | `string`  | `undefined`    |
| `sharePath`  | `share-path`  |             | `string`  | `undefined`    |
| `styleClass` | `style-class` |             | `string`  | `undefined`    |
| `theme`      | `theme`       |             | `string`  | `undefined`    |


## Dependencies

### Depends on

- [ecl-link](../ecl-link)
- [ecl-icon](../ecl-icon)

### Graph
```mermaid
graph TD;
  ecl-social-media-follow-item --> ecl-link
  ecl-social-media-follow-item --> ecl-icon
  ecl-link --> ecl-icon
  ecl-link --> ecl-indicator
  style ecl-social-media-follow-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

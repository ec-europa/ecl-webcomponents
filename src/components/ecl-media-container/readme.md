# ecl-media-container



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default     |
| --------------- | ---------------- | ----------- | --------- | ----------- |
| `description`   | `description`    |             | `string`  | `undefined` |
| `eclScript`     | `ecl-script`     |             | `boolean` | `false`     |
| `embeddedMedia` | `embedded-media` |             | `boolean` | `false`     |
| `fullWidth`     | `full-width`     |             | `boolean` | `false`     |
| `hasCaption`    | `has-caption`    |             | `boolean` | `false`     |
| `image`         | `image`          |             | `string`  | `undefined` |
| `imageAlt`      | `image-alt`      |             | `string`  | `undefined` |
| `ratio`         | `ratio`          |             | `string`  | `''`        |
| `sources`       | `sources`        |             | `string`  | `undefined` |
| `styleClass`    | `style-class`    |             | `string`  | `undefined` |
| `theme`         | `theme`          |             | `string`  | `'ec'`      |
| `tracks`        | `tracks`         |             | `string`  | `undefined` |


## Dependencies

### Used by

 - [ecl-featured-item](../ecl-featured-item)

### Depends on

- [ecl-picture](../ecl-picture)

### Graph
```mermaid
graph TD;
  ecl-media-container --> ecl-picture
  ecl-featured-item --> ecl-media-container
  style ecl-media-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

# ecl-tag



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default     |
| ------------ | ------------- | ----------- | --------- | ----------- |
| `external`   | `external`    |             | `boolean` | `false`     |
| `styleClass` | `style-class` |             | `string`  | `undefined` |
| `theme`      | `theme`       |             | `string`  | `'ec'`      |
| `url`        | `url`         |             | `string`  | `''`        |
| `variant`    | `variant`     |             | `string`  | `'display'` |


## Events

| Event       | Description | Type                   |
| ----------- | ----------- | ---------------------- |
| `removeTag` |             | `CustomEvent<boolean>` |


## Dependencies

### Used by

 - [ecl-description-list-definition](../ecl-description-list)

### Depends on

- [ecl-icon](../ecl-icon)

### Graph
```mermaid
graph TD;
  ecl-tag --> ecl-icon
  ecl-description-list-definition --> ecl-tag
  style ecl-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

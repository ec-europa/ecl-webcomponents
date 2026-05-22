# ecl-select



<!-- Auto Generated Below -->


## Properties

| Property                      | Attribute                         | Description | Type      | Default     |
| ----------------------------- | --------------------------------- | ----------- | --------- | ----------- |
| `buttonLabel`                 | `button-label`                    |             | `string`  | `undefined` |
| `disabled`                    | `disabled`                        |             | `boolean` | `false`     |
| `hasChanged`                  | `has-changed`                     |             | `boolean` | `false`     |
| `inputId`                     | `input-id`                        |             | `string`  | `undefined` |
| `inputValue`                  | `input-value`                     |             | `string`  | `undefined` |
| `invalid`                     | `invalid`                         |             | `boolean` | `false`     |
| `multiple`                    | `multiple`                        |             | `boolean` | `false`     |
| `multipleAllText`             | `multiple-all-text`               |             | `string`  | `undefined` |
| `multipleClearAllText`        | `multiple-clear-all-text`         |             | `string`  | `undefined` |
| `multipleCloseText`           | `multiple-close-text`             |             | `string`  | `undefined` |
| `multipleCounterText`         | `multiple-counter-text`           |             | `string`  | `undefined` |
| `multiplePlaceholder`         | `multiple-placeholder`            |             | `string`  | `undefined` |
| `multipleSearchNoResultsText` | `multiple-search-no-results-text` |             | `string`  | `undefined` |
| `multipleSearchText`          | `multiple-search-text`            |             | `string`  | `undefined` |
| `multipleSubmit`              | `multiple-submit`                 |             | `boolean` | `false`     |
| `name`                        | `name`                            |             | `string`  | `undefined` |
| `noScript`                    | `no-script`                       |             | `boolean` | `false`     |
| `required`                    | `required`                        |             | `boolean` | `false`     |
| `selectId`                    | `select-id`                       |             | `string`  | `undefined` |
| `styleClass`                  | `style-class`                     |             | `string`  | `undefined` |
| `theme`                       | `theme`                           |             | `string`  | `undefined` |
| `width`                       | `width`                           |             | `string`  | `'m'`       |


## Events

| Event         | Description | Type                      |
| ------------- | ----------- | ------------------------- |
| `inputBlur`   |             | `CustomEvent<FocusEvent>` |
| `inputChange` |             | `CustomEvent<any>`        |
| `inputFocus`  |             | `CustomEvent<FocusEvent>` |


## Dependencies

### Depends on

- [ecl-button](../ecl-button)
- [ecl-icon](../ecl-icon)

### Graph
```mermaid
graph TD;
  ecl-select --> ecl-button
  ecl-select --> ecl-icon
  ecl-button --> ecl-indicator
  style ecl-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

# ecl-datepicker



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default        |
| -------------- | --------------- | ----------- | --------- | -------------- |
| `dateFormat`   | `date-format`   |             | `string`  | `'DD-MM-YYYY'` |
| `defaultValue` | `default-value` |             | `string`  | `undefined`    |
| `disabled`     | `disabled`      |             | `boolean` | `false`        |
| `hasChanged`   | `has-changed`   |             | `boolean` | `false`        |
| `inputId`      | `input-id`      |             | `string`  | `undefined`    |
| `invalid`      | `invalid`       |             | `boolean` | `false`        |
| `isFocused`    | `is-focused`    |             | `boolean` | `false`        |
| `name`         | `name`          |             | `string`  | `undefined`    |
| `placeholder`  | `placeholder`   |             | `string`  | `'DD-MM-YYYY'` |
| `required`     | `required`      |             | `boolean` | `false`        |
| `styleClass`   | `style-class`   |             | `string`  | `undefined`    |
| `theme`        | `theme`         |             | `string`  | `'ec'`         |
| `type`         | `type`          |             | `string`  | `undefined`    |
| `yearRange`    | `year-range`    |             | `number`  | `40`           |


## Events

| Event         | Description | Type                      |
| ------------- | ----------- | ------------------------- |
| `inputBlur`   |             | `CustomEvent<FocusEvent>` |
| `inputChange` |             | `CustomEvent<any>`        |
| `inputFocus`  |             | `CustomEvent<FocusEvent>` |


## Dependencies

### Depends on

- [ecl-icon](../ecl-icon)

### Graph
```mermaid
graph TD;
  ecl-datepicker --> ecl-icon
  style ecl-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

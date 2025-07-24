# ecl-site-header



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description | Type      | Default     |
| ------------------- | --------------------- | ----------- | --------- | ----------- |
| `closeLabel`        | `close-label`         |             | `string`  | `undefined` |
| `eclScript`         | `ecl-script`          |             | `boolean` | `false`     |
| `euLabel`           | `eu-label`            |             | `string`  | `undefined` |
| `langCode`          | `lang-code`           |             | `string`  | `undefined` |
| `language`          | `language`            |             | `string`  | `undefined` |
| `languageAriaLabel` | `language-aria-label` |             | `string`  | `undefined` |
| `languageBlock`     | `language-block`      |             | `boolean` | `false`     |
| `languageId`        | `language-id`         |             | `string`  | `undefined` |
| `languageTitle`     | `language-title`      |             | `string`  | `undefined` |
| `loginBlock`        | `login-block`         |             | `boolean` | `false`     |
| `loginLink`         | `login-link`          |             | `string`  | `undefined` |
| `loginText`         | `login-text`          |             | `string`  | `undefined` |
| `logoAlt`           | `logo-alt`            |             | `string`  | `undefined` |
| `logoTitle`         | `logo-title`          |             | `string`  | `undefined` |
| `nonEuLabel`        | `non-eu-label`        |             | `string`  | `undefined` |
| `searchBlock`       | `search-block`        |             | `boolean` | `true`      |
| `searchPlaceholder` | `search-placeholder`  |             | `string`  | `undefined` |
| `searchText`        | `search-text`         |             | `string`  | `undefined` |
| `siteName`          | `site-name`           |             | `string`  | `undefined` |
| `styleClass`        | `style-class`         |             | `string`  | `undefined` |
| `theme`             | `theme`               |             | `string`  | `'ec'`      |


## Dependencies

### Depends on

- [ecl-link](../ecl-link)
- [ecl-picture](../ecl-picture)
- [ecl-icon](../ecl-icon)
- [ecl-search-form](../ecl-search-form)

### Graph
```mermaid
graph TD;
  ecl-site-header --> ecl-link
  ecl-site-header --> ecl-picture
  ecl-site-header --> ecl-icon
  ecl-site-header --> ecl-search-form
  ecl-link --> ecl-icon
  ecl-search-form --> ecl-form-group
  ecl-search-form --> ecl-input
  ecl-search-form --> ecl-button
  ecl-search-form --> ecl-icon
  ecl-form-group --> ecl-icon
  ecl-input --> ecl-icon
  ecl-button --> ecl-indicator
  style ecl-site-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

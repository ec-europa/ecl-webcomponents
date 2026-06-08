# ecl-site-header



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute               | Description | Type      | Default                                                                        |
| -------------------- | ----------------------- | ----------- | --------- | ------------------------------------------------------------------------------ |
| `bannerTop`          | `banner-top`            |             | `string`  | `''`                                                                           |
| `bannerTopLink`      | `banner-top-link`       |             | `string`  | `''`                                                                           |
| `closeLabel`         | `close-label`           |             | `string`  | `''`                                                                           |
| `euLabel`            | `eu-label`              |             | `string`  | `''`                                                                           |
| `langCode`           | `lang-code`             |             | `string`  | `''`                                                                           |
| `language`           | `language`              |             | `string`  | `''`                                                                           |
| `languageAriaLabel`  | `language-aria-label`   |             | `string`  | `''`                                                                           |
| `languageBlock`      | `language-block`        |             | `boolean` | `false`                                                                        |
| `languageId`         | `language-id`           |             | `string`  | `''`                                                                           |
| `languageTitle`      | `language-title`        |             | `string`  | `''`                                                                           |
| `logged`             | `logged`                |             | `boolean` | `false`                                                                        |
| `loggedInText`       | `logged-in-text`        |             | `string`  | `''`                                                                           |
| `loginBlock`         | `login-block`           |             | `boolean` | `false`                                                                        |
| `loginLink`          | `login-link`            |             | `string`  | `''`                                                                           |
| `loginText`          | `login-text`            |             | `string`  | `''`                                                                           |
| `logo`               | `logo`                  |             | `string`  | `''`                                                                           |
| `logoAlt`            | `logo-alt`              |             | `string`  | `''`                                                                           |
| `logoSize`           | `logo-size`             |             | `string`  | `'l'`                                                                          |
| `logoTitle`          | `logo-title`            |             | `string`  | `''`                                                                           |
| `logoutLink`         | `logout-link`           |             | `string`  | `''`                                                                           |
| `logoutText`         | `logout-text`           |             | `string`  | `''`                                                                           |
| `noScript`           | `no-script`             |             | `boolean` | `false`                                                                        |
| `nonEuLabel`         | `non-eu-label`          |             | `string`  | `''`                                                                           |
| `searchBlock`        | `search-block`          |             | `boolean` | `true`                                                                         |
| `searchFormId`       | `search-form-id`        |             | `string`  | `` `ecl-site-header-search-form-${Math.random().toString(36).slice(2, 10)}` `` |
| `searchPlaceholder`  | `search-placeholder`    |             | `string`  | `''`                                                                           |
| `searchText`         | `search-text`           |             | `string`  | `''`                                                                           |
| `siteName`           | `site-name`             |             | `string`  | `''`                                                                           |
| `siteNameMobileOnly` | `site-name-mobile-only` |             | `boolean` | `false`                                                                        |
| `styleClass`         | `style-class`           |             | `string`  | `''`                                                                           |
| `theme`              | `theme`                 |             | `string`  | `'ec'`                                                                         |


## Dependencies

### Depends on

- [ecl-link](../ecl-link)
- [ecl-picture](../ecl-picture)
- [ecl-icon](../ecl-icon)
- [ecl-button](../ecl-button)
- [ecl-search-form](../ecl-search-form)

### Graph
```mermaid
graph TD;
  ecl-site-header --> ecl-link
  ecl-site-header --> ecl-picture
  ecl-site-header --> ecl-icon
  ecl-site-header --> ecl-button
  ecl-site-header --> ecl-search-form
  ecl-link --> ecl-icon
  ecl-link --> ecl-indicator
  ecl-button --> ecl-indicator
  ecl-search-form --> ecl-form-group
  ecl-search-form --> ecl-input
  ecl-search-form --> ecl-button
  ecl-search-form --> ecl-icon
  ecl-form-group --> ecl-icon
  ecl-input --> ecl-icon
  style ecl-site-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

# `eslint-config-custom`

Collection of [internal](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages) eslint configurations.

To use these configurations, add the following to your `.eslintrc.js`:

```json
{
  "extends": ["custom/%{configName}"]
}
```

Whereas `%{configName}` is one of the configurations in this package. For a full list, browse the root directory of this package.

> [!NOTE]
> Using `custom` instead of `eslint-config-custom` is a common convention used by ESLint. Read more about it [here](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config).

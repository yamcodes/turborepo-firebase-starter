# `tsconfig`

Collection of [internal](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages) TypeScript configurations.

To use these configurations, add the following to your `tsconfig.json`:

```json
  "extends": "tsconfig/%{configName}.json"
```

Whereas `%{configName}` is one of the configurations in this package. For a complete list, browse the root directory of this package.

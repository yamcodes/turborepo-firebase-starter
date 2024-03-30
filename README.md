# Turborepo Firebase starter

This is an unofficial starter Turborepo.

## Using this example

How to combine turborepo and firebase to have idempotent deployments from local and CI.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and packages

```
├── apps
│   ├── api # firebase function that is typescript and loaded as ESM and deployed as a firebase function
│   └── web # the react+vite front end deployed to firebase hosting
```

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [Firebase CLI](https://firebase.google.com/docs/cli)
- A [Firebase project](https://firebase.google.com/docs/projects/create)

### Setup

1. Edit `.firebaserc` and add your project's id
2. Install dependencies

```sh
  pnpm i
```

### Develop

```sh
  pnpm start
```

### Deploy

```sh
  pnpm deploy
```

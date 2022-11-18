# eslint-config-react-ts

This repo contains an ESLint config to share across all the frontend projects in the ide3
organization. It has been designed to work with TypeScript and React.

This config will ignore common directories and files in a React project:

- `node-modules`
- `package-lock.json`

# Setup

First of all, you will need to install the `peerDependencies`:

```sh
npm i react typescript eslint
```

After that, you'll be able to install the package without warnings:

```sh
npm i @iden3/eslint-config-react-ts
```

Then, create an `.eslintrc.json` file in your frontend project extending the config and specifying
your build directory inside the `ignorePatterns` array:

```json
{
  "extends": "@iden3/eslint-config-react-ts",
  "ignorePatterns": ["build"]
}
```

Finally, check that everything works fine by running:

```sh
eslint --ext .ts,.tsx .
```

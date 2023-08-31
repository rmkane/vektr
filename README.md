# Vektr

A 2D and 3D vector math library written in TypeScript.

## Commands

```shell
yarn install   # Initial setup
yarn clean     # Remove all generated directories
yarn build     # Generate the `lib/`, `lib-esm/`, and `dist/` directories
yarn test      # Run Jest unit tests
yarn docs      # Generate typedoc in the `docs/` directory
yarn serve     # Start a Webpack dev server (see the `public/` directory)
yarn generate  # Derive the array math library from the object math (overwrites the src/core/math/array/ dir!)
```

## Inspiration

The following libraries were the inspiration for the Vektr library:

- [Babylon.js](https://github.com/BabylonJS/Babylon.js/blob/master/packages/dev/core/src/Maths/math.vector.ts)
- [Victor.js](https://github.com/maxkueng/victor/blob/master/index.js)
- [Fork of Victor.js](https://github.com/a-robu/victor/blob/master/index.js)
- [Immutable version of Victor.js](https://github.com/yukulele/Vector.js/blob/master/vector.ts)

## VS Code configuration

Here is a sample settings configuration for VS Code.

```json
// Filename: .vscode/settings.json
{
  "editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll.eslint"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.detectIndentation": false,
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.rulers": [120],
  "editor.tabSize": 2,
  "files.eol": "\n"
}
```

## Husky setup

In order to execute husky shell scripts, set the permissions:

```shell
chmod ug+x .husky/*
```

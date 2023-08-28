# Vector Math

A 2D and 3D vector library written in TypeScript.

## Setup

- Vite JS library: <https://andrewwalpole.com/blog/use-vite-for-javascript-libraries/>
- Vite TS library: <https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/>
- Setup ESLint and Prettier for TS: <https://blog.logrocket.com/linting-typescript-eslint-prettier/>
- Prettier automation: <https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/>
- Husky: <https://www.aleksandrhovhannisyan.com/blog/format-code-on-save-vs-code-eslint/>
- Vite Entry Points: <https://www.raulmelo.me/en/blog/build-javascript-library-with-multiple-entry-points-using-vite-3>
- Multi-Support Webpack (JS): <https://dev.to/riversun/recipes-on-how-to-create-a-library-that-supports-both-browser-and-node-js-201m>
- Multi-Support TypeScript: <https://medium.com/collaborne-engineering/typescript-create-library-for-nodejs-and-browser-fece291d517f>

## Inspiration

- Babylon.js: <https://github.com/BabylonJS/Babylon.js/blob/master/packages/dev/core/src/Maths/math.vector.ts>
- Victor.js: <https://github.com/maxkueng/victor/blob/master/index.js>
- Fork of Victor.js: <https://github.com/a-robu/victor/blob/master/index.js>
- Immutable version of Victor.js: <https://github.com/yukulele/Vector.js/blob/master/vector.ts>

## VScode configuration

See: <https://rohit.page/blog/posts/how-to-get-prettier-eslint-play-nicely-with-vscode/>

```json
// Filename: .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll.eslint"]
}
```

## Husky setup

In order to execute husky shell scripts, set the permissions:

```shell
chmod ug+x .husky/*
```

# Web App Template
Personal template for making a web app so I don't have to think about it as much. Uses [degit](https://github.com/Rich-Harris/degit) for scaffolding.

I like React  
I like Material UI  
I like Vite  

## Setup
Node 18 required  

Install dependencies
```
npm install -g degit
npm install -g vite
```

Add bash function to shell
```
create-web-app() {
  mkdir $1
  cd $1
  degit StephenFerrari14/web-app-template
  npm install
  echo "Run with `npm run dev`"
}
```

## Run
Run with command
```
create-web-app $name
```

## TODO
- Figure out React Router or another routing library
- Add test scaffolding
- Try state management libraries
- Footer
- Fix some css


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

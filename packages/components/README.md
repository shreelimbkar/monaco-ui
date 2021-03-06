<p align="center">
  <img src="./docs/public/images/logo.png" width="150" height="150" alt="Monaco-UI" />
</p>

<h1 align="center">Welcome to Monaco UI</h1>

<p>
  <strong>The Monaco UI components library is an experimental project inspired by the styled system.</strong>
</p>

&nbsp;

Monaco UI is based on design principles. With a broad API and better developer friendliness, Developers may create customized component libraries, design systems, web apps, and more.

### Documentation

[https://shreelimbkar.github.io/monaco-ui/](https://shreelimbkar.github.io/monaco-ui/)

### Installing Monaco UI

This library is made up of a variety of components and utilities that you may add one at a time. Installing the monaco-ui package is all you need to do.

```
# with yarn
$ yarn add monaco-ui

# with npm
$ npm install --save monaco-ui
```

You can import component as named component from the main package module

```
// using import syntax
import { Button, Box } from 'monaco-ui/core';
```

Or you can import component as default component from the main package module

```
// using import syntax
import Button from 'monaco-ui/core/button';
```

### Peer dependencies

Monaco-Ui build with few libraries labeled as peer dependencies. These libraries are not automatically installed.

Monaco-UI requires the installation of the following libraries:

- react at versions 16.8.0 or higher
- react-dom at versions 16.8.0 or higher
- styled-components at version 5.0.0 or higher

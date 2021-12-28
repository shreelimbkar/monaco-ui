import React, { ReactElement } from 'react';
import './App.css';

import { Button, Box } from 'monaco-ui/core';

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>List of React Components</h1>
      <div>
        <h2>Button</h2>
        <Button>Default Button</Button>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button disabled={true}>Disabled Button</Button>
        <Button variant="text">Variant Text</Button>
      </div>
      <div>
        <h2>Box</h2>
        <Box>Hello World</Box>
      </div>
    </div>
  );
};

export default App;

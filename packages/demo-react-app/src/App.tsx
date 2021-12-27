import React, { ReactElement } from 'react';
import './App.css';

import { Button } from 'monaco-ui/core';

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>List of React Components</h1>
      <Button>Default Button</Button>
      <Button color="primary">Primary Button</Button>
      <Button color="secondary">Secondary Button</Button>
      <Button disabled={true}>Disabled Button</Button>
      <Button variant="text">Variant Text</Button>
    </div>
  );
};

export default App;

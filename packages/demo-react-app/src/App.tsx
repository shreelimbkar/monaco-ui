import React, { ReactElement } from 'react';
import './App.css';

import { Button } from 'monaco-ui/core';

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>List of React Components</h1>
      <Button>Default Button</Button>
      <Button color="primary">Primary Button</Button>
      <Button color="secondary">Primary Button</Button>
    </div>
  );
};

export default App;

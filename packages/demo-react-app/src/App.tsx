import React, { ReactElement } from 'react';
import './App.css';

import { Button } from 'monaco-ui/core';

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>List of React Components</h1>
      <Button>Primary Button</Button>
    </div>
  );
};

export default App;

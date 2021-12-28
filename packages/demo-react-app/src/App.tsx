import React, { ReactElement } from 'react';
import './App.css';

import Button from 'monaco-ui/core/button';
import Box from 'monaco-ui/core/box';

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>List of Monaco-UI React Components</h1>
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
        <Box
          color={'#000'}
          bg={'tomato'}
          display="flex"
          height="100px"
          justifyContent={'center'}
          alignItems="center"
          width="100%"
          boxShadow="2px 2px #888888"
        >
          Hello World
        </Box>
      </div>
    </div>
  );
};

export default App;

import React, { ReactElement, useState } from 'react';
import './App.css';

import { Button } from 'monaco-ui/core';
import { Box, Label, InputField } from 'monaco-ui/core';

const App = (): ReactElement => {
  const [initialVal, setInitialVal] = useState('');

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
          bg={'#6adf6a'}
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
      <div>
        <h2>Label</h2>
        <Label width={1 / 2}>Monaco-UI Label</Label>
      </div>
      <div>
        <h2>Input Field</h2>
        <InputField
          placeholder="Basic Input Field"
          name="username"
          value={initialVal}
          onChange={(e) => {
            setInitialVal(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default App;

import React from 'react';

import InputProps from '../types/InputProps';
import { InputFieldStyles } from './InputFieldStyles';

const InputField: React.FC<InputProps> = (props) => {
  const { children } = props;
  const ref = React.useRef(null);
  return (
    <InputFieldStyles as="input" ref={ref} {...props}>
      {children}
    </InputFieldStyles>
  );
};

export default InputField;

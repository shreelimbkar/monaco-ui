import React, { MouseEventHandler } from 'react';
import { ButtonStyles } from './ButtonStyles';

import DefaultProps from '../types/ButtonProps';

interface ButtonProps extends DefaultProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler;
  style?: object;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, children } = props;
  return (
    <ButtonStyles {...props} onClick={onClick}>
      {children}
    </ButtonStyles>
  );
};

export default Button;

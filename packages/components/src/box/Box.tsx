import React from 'react';

import BoxProps from '../types/BoxProps';
import { BoxStyles } from './BoxStyles';

const Box: React.FC<BoxProps> = (props) => {
  const { children } = props;
  const ref = React.useRef(null);
  return (
    <BoxStyles ref={ref} {...props}>
      {children}
    </BoxStyles>
  );
};

export default Box;

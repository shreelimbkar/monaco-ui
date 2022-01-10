import React from 'react';

import BoxProps from '../types/BoxProps';
import { LabelStyles } from './LabelStyles';

const Label: React.FC<BoxProps> = (props) => {
  const { children } = props;
  const ref = React.useRef(null);
  return (
    <LabelStyles as="label" ref={ref} {...props}>
      {children}
    </LabelStyles>
  );
};

export default Label;

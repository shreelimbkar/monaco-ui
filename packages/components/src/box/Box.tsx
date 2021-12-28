import React from 'react';
import styled from 'styled-components';
import { background, border, color, flexbox, grid, layout, position, shadow, space, typography } from 'styled-system';

// import { BoxStyles } from './BoxStyles';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
);

// const Box: React.FC = ({ children }) => {
//   return <BoxStyles>{children}</BoxStyles>;
// };

export default Box;

import styled, { css } from 'styled-components';
import { background, border, color, flexbox, grid, layout, position, shadow, space, typography } from 'styled-system';

const LabelStyles = styled.div<any>(
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
  css`
    display: flex;
  `,
);

export { LabelStyles };

import styled, { css } from 'styled-components';
import { brand, color as c, fontSize, spacing, lineHeight } from '../tokens';
import { background, border, color, flexbox, grid, layout, position, shadow, space, typography } from 'styled-system';

const InputFieldStyles = styled.input<any>(
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
    box-sizing: border-box;
    position: relative;
    padding: ${spacing.s};
    font-size: ${fontSize.s2};
    line-height: ${lineHeight.xs};
    background-color: ${brand.white};
    color: ${brand.darkBlue};
    border-radius: 2px;
    border: 1px solid ${c['darkBlue-20']};
    display: inline-block;
    transition: all 0.3s;
    &:hover {
      border: 1px solid ${c['darkBlue-80']};
      box-shadow: 0 0 0 1px ${c.grey10};
    }
    &:focus {
      border: 1px solid ${c['darkBlue-80']};
    }
  `,
);

export { InputFieldStyles };

import styled, { css } from 'styled-components';
import { brand, color, fontSize, weight, lineHeight } from '../tokens';

import DefaultProps from '../types/ButtonProps';

const ButtonStyles = styled.button<DefaultProps>`
  border: 2px solid ${color.grey};
  border-radius: 40px;
  box-sizing: border-box;
  background-color: ${color.grey};
  color: ${color.blue130};
  cursor: pointer;
  display: inline-block;
  padding: 0.375rem 1.25rem;
  font-size: ${fontSize.s4};
  position: relative;
  text-align: center;
  text-decoration: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${weight.medium};
  line-height: ${lineHeight.l};
  transition: 0.2s all;
  ${(props) =>
    props.color === 'primary' &&
    css`
      border: 2px solid ${brand.blue};
      background-color: ${brand.blue};
      color: ${brand.white};
      &:hover {
        border: 2px solid ${color['blue80']};
        background-color: ${color['blue80']};
      }
    `}
  ${(props) =>
    props.color === 'secondary' &&
    css`
      background-color: transparent;
      color: ${brand.blue};
      border: 2px solid ${brand.blue};
      &:hover {
        color: ${brand.blue};
        background-color: ${color['blue10']};
      }
    `}
  ${(props) =>
    props.variant === 'text' &&
    css`
      background-color: transparent;
      color: ${brand.blue};
      border: unset;
      &:hover {
        border: unset;
        color: ${brand.blue};
        background-color: ${color['blue10']};
      }
    `}
    ${(props) =>
    props.disabled &&
    css`
      background-color: ${color['darkBlue-10']};
      border: 2px solid ${color['darkBlue-10']};
      color: ${color['darkBlue-50']};
      cursor: not-allowed;
      &:hover {
        background-color: ${color['darkBlue-10']};
        border: 2px solid ${color['darkBlue-10']};
        color: ${color['darkBlue-50']};
      }
    `}
`;

export { ButtonStyles };

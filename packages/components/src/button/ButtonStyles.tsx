import styled, { css } from 'styled-components';

import DefaultProps from '../types/ButtonProps';

const ButtonStyles = styled.button<DefaultProps>`
  border: 2px solid #2175d9;
  border-radius: 40px;
  box-sizing: border-box;
  background-color: #2175d9;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  padding: 0.375rem 1.25rem;
  font-size: 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 2.133333435058594;
  transition: 0.2s all;
`;

export { ButtonStyles };

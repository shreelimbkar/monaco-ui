import styled, { AnyStyledComponent, css } from "styled-components";

interface IHeadingStyled {
  primary?: boolean;
  round?: boolean;
}

export const ButtonStyles = styled.button<IHeadingStyled>`
  background: black;
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
  ${(props) =>
    props.primary &&
    css`
      background: green;
      color: white;
    `}
  border-radius: ${(props) => (props.round ? "50%" : "7px")}
`;

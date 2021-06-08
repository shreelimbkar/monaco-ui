import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
// import styled, { AnyStyledComponent, css } from "styled-components";
import { ButtonStyles } from "./ButtonStyle";

interface DefaultProps {
  children?: React.ReactNode;
  props?: any;
  primary?: boolean;
  round?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  type?: "submit" | "reset" | "button";
}
// interface IHeadingStyled {
//   primary?: boolean;
//   round?: boolean;
// }

const RRSButton: React.FC<DefaultProps> = ({ onClick, children, ...props }) => {
  return (
    <ButtonStyles {...props} onClick={onClick}>
      {children}
    </ButtonStyles>
  );
};

// const ButtonStyles = styled.button<IHeadingStyled>`
//   background: black;
//   color: white;
//   border-radius: 7px;
//   padding: 20px;
//   margin: 10px;
//   font-size: 16px;
//   :disabled {
//     opacity: 0.4;
//   }
//   :hover {
//     box-shadow: 0 0 10px yellow;
//   }
//   ${(props) =>
//     props.primary &&
//     css`
//       background: green;
//       color: white;
//     `}
//   border-radius: ${(props) => (props.round ? "50%" : "7px")}
// `;

export { RRSButton };

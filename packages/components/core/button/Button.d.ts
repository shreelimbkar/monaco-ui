import React, { MouseEventHandler } from 'react';
import DefaultProps from '../types/ButtonProps';
interface ButtonProps extends DefaultProps {
    children?: React.ReactNode;
    onClick?: MouseEventHandler;
    style?: object;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;

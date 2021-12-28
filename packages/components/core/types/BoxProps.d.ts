/// <reference types="react" />
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps } from 'styled-system';
export default interface BoxProps extends BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps, ShadowProps, TypographyProps {
    style?: object;
    className?: string;
    props?: React.ReactNode;
    children?: React.ReactNode;
}

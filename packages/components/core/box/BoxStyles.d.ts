/// <reference types="react" />
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps } from 'styled-system';
interface StyledBoxProps {
    props: React.ReactNode;
    Space: SpaceProps;
    Color: ColorProps;
    Typography: TypographyProps;
    Layout: LayoutProps;
    Flexbox: FlexboxProps;
    Grid: GridProps;
    Background: BackgroundProps;
    Border: BorderProps;
    Position: PositionProps;
    Shadow: ShadowProps;
}
declare const BoxStyles: import("styled-components").StyledComponent<"div", any, StyledBoxProps, never>;
export { BoxStyles };

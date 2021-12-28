import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

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

const BoxStyles = styled.div<StyledBoxProps>(
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
);

export { BoxStyles };

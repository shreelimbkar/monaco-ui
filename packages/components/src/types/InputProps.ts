import { ChangeEvent, ChangeEventHandler, InputHTMLAttributes, ReactEventHandler } from 'react';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export default interface InputProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    ShadowProps,
    TypographyProps {
  style?: object;
  name?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  props?: React.ReactNode;
  children?: React.ReactNode;
}

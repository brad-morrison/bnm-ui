import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

type StyleFn = (t: DefaultTheme) => ReturnType<typeof css> | string;

type BoxProps<E extends React.ElementType> = {
  as?: E;
  gap?: string;
  p?: string;
  m?: string;
  display?: React.CSSProperties['display'];
  styleOverrides?: React.CSSProperties; // raw style escape hatch
  sx?: ReturnType<typeof css> | StyleFn; // styled-components escape hatch
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'color'>;

const BoxBase = styled.div<BoxProps<any>>`
  box-sizing: border-box;
  display: ${({ display }) => display || 'block'};
  gap: ${({ gap }) => gap};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  ${({ sx, theme }) => (typeof sx === 'function' ? sx(theme) : sx)}
`;

export const Box = <E extends React.ElementType = 'div'>(props: BoxProps<E>) => {
  const { as, styleOverrides, ...rest } = props;
  return <BoxBase as={as as any} style={styleOverrides} {...(rest as any)} />;
};
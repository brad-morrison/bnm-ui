import React from 'react';
import styled, { css } from 'styled-components';

type BoxProps<E extends React.ElementType> = {
  as?: E;
  p?: string;
  m?: string;
  gap?: string;
  display?: string;
  styleOverrides?: React.CSSProperties;
  sx?: ReturnType<typeof css>;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as'>;

const BoxBase = styled.div<BoxProps<any>>`
  box-sizing: border-box;
  display: ${({ display }) => display || 'block'};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  gap: ${({ gap }) => gap};
  ${({ sx }) => sx}
`;

export const Box = <E extends React.ElementType = 'div'>(props: BoxProps<E>) => {
  const { as, styleOverrides, ...rest } = props;
  return <BoxBase as={as as any} style={styleOverrides} {...(rest as any)} />;
};
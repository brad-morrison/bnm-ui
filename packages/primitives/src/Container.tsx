import React from 'react';
import { css, DefaultTheme } from 'styled-components';
import { Box, BoxProps, StyleFn } from './Box';

export type ContainerProps<E extends React.ElementType = 'div'> = BoxProps<E> & {
  /** content max-width (e.g. "1100px" or "min(1100px, 92vw)") */
  width?: string;
  /** horizontal padding (e.g. "var(--space-4)") */
  paddingX?: string;
};

export const Container = <E extends React.ElementType = 'div'>(props: ContainerProps<E>) => {
  const { width = 'min(1100px, 92vw)', paddingX = '1rem', sx, ...rest } = props;

  const containerSx: StyleFn =
    typeof sx === 'function'
      ? (theme: DefaultTheme) => css`
          max-width: ${width};
          margin: 0 auto;
          padding-left: ${paddingX};
          padding-right: ${paddingX};
          ${sx(theme)}
        `
      : () => css`
          max-width: ${width};
          margin: 0 auto;
          padding-left: ${paddingX};
          padding-right: ${paddingX};
          ${sx ?? ''}
        `;

  const boxProps = { ...rest, sx: containerSx } as BoxProps<E>;

  return <Box {...boxProps} />;
};
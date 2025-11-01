import React, { PropsWithChildren } from 'react';
import { ThemeProvider as SCThemeProvider, createGlobalStyle } from 'styled-components';
import { color, space, radius, font } from '@bnm/tokens';

export const theme = { color, space, radius, font };

const Global = createGlobalStyle`
  :root { color-scheme: light dark; }
  body {
    margin: 0;
    background: ${color.bg.default};
    color: ${color.bg.text};
    font-family: ${font.family.base};
  }
`;

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <SCThemeProvider theme={theme}>
    <Global />
    {children}
  </SCThemeProvider>
);
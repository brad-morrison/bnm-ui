import React from 'react';
import { Box } from './Box';

type GridItemProps<E extends React.ElementType = 'div'> =
  Omit<React.ComponentPropsWithoutRef<typeof Box>, 'as'> & {
    as?: E;
    /** e.g. "1 / span 3" or "2 / 7" */
    col?: string;
    /** e.g. "auto / span 2" or "1 / 3" */
    row?: string;
    /** when using named grid areas */
    area?: string;
  };

export const GridItem = <E extends React.ElementType = 'div'>(props: GridItemProps<E>) => {
  const { col, row, area, styleOverrides, ...rest } = props;

  return (
    <Box
      {...(rest as any)}
      styleOverrides={{
        gridColumn: col,
        gridRow: row,
        gridArea: area,
        ...(styleOverrides || {}),
      }}
    />
  );
};
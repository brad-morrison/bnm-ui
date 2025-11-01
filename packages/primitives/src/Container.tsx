import React from 'react';
import { Box } from './Box';

export type ContainerProps<E extends React.ElementType = 'div'> =
  Omit<React.ComponentPropsWithoutRef<typeof Box>, 'as'> & {
    as?: E;
    /** content max-width (e.g. "1100px" or "min(1100px, 92vw)") */
    width?: string;
    /** horizontal padding (e.g. "var(--space-4)") */
    paddingX?: string;
  };

export const Container = <E extends React.ElementType = 'div'>(props: ContainerProps<E>) => {
  const { width = 'min(1100px, 92vw)', paddingX = '1rem', sx, ...rest } = props;
  return (
    <Box
      {...(rest as any)}
      sx={`
        max-width: ${width};
        margin: 0 auto;
        padding-left: ${paddingX};
        padding-right: ${paddingX};
        ${sx || ''}
      `}
    />
  );
};
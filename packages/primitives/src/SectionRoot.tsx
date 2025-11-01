// packages/primitives/src/SectionRoot.tsx
import React from 'react';
import { Box } from './Box';

export type SectionRootProps = Omit<
  React.ComponentPropsWithoutRef<typeof Box>,
  'as'
> & {
  tone?: 'default' | 'surface' | 'accent';
  paddingY?: string;
};

export const SectionRoot = (props: SectionRootProps) => {
  const { tone = 'default', paddingY = 'var(--space-12)', sx, ...rest } = props;

  return (
    <Box
      as="section"
      {...rest}
      sx={(theme) => `
        background: ${
          tone === 'surface' ? theme.color.bg.surface
        : tone === 'accent'  ? theme.color.bg.accent
                              : 'transparent'
        };
        color: ${theme.color.bg.text};
        padding-top: ${paddingY};
        padding-bottom: ${paddingY};
        ${typeof sx === 'function' ? sx(theme) : (sx || '')}
      `}
    />
  );
};
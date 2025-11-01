// packages/primitives/src/Button.tsx
import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { Box } from './Box';

type ButtonVariant = 'accent' | 'surface' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type StyledProps = {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
};

// Map each variant name to the themed CSS snippet it should apply.
const variantStyles: Record<ButtonVariant, (theme: DefaultTheme) => ReturnType<typeof css>> = {
  accent: (theme) => css`
    background-color: ${theme.color.bg.accent};
    color: ${theme.color.bg.accentContrast};
    border: none;
    
    &:hover:not(:disabled):not([aria-disabled='true']) {
      filter: brightness(1.05);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      filter: brightness(0.95);
    }
  `,
  surface: (theme) => css`
    background-color: ${theme.color.bg.surface};
    color: ${theme.color.bg.text};
    border: 1px solid ${theme.color.bg.subtle};

    &:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: ${theme.color.bg.default};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${theme.color.bg.surface};
      filter: brightness(0.95);
    }
  `,
  ghost: (theme) => css`
    background-color: transparent;
    color: ${theme.color.bg.text};
    border: 1px solid transparent;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: ${theme.color.bg.surface};
      border-color: ${theme.color.bg.surface};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      filter: brightness(0.95);
    }
  `,
};

// Centralize padding and font sizing for the supported size options.
const sizeStyles: Record<ButtonSize, (theme: DefaultTheme) => ReturnType<typeof css>> = {
  sm: (theme) => css`
    padding: ${theme.space[1]} ${theme.space[3]};
    font-size: ${theme.font.size[1]};
  `,
  md: (theme) => css`
    padding: ${theme.space[2]} ${theme.space[4]};
    font-size: ${theme.font.size[2]};
  `,
  lg: (theme) => css`
    padding: ${theme.space[3]} ${theme.space[6]};
    font-size: ${theme.font.size[3]};
  `,
};

// Styled wrapper around Box that wires variant/size/fullWidth into the final CSS.
const ButtonBase = styled(Box)<StyledProps>`
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  max-width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'max-content')};
  gap: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  line-height: 1.05;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.15s ease, filter 0.2s ease, background-color 0.2s ease,
    color 0.2s ease, border-color 0.2s ease;

  ${({ theme, $variant }) => variantStyles[$variant](theme)}
  ${({ theme, $size }) => sizeStyles[$size](theme)}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.bg.accent};
    outline-offset: 2px;
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.6;
    filter: none;
  }
`;

export type ButtonProps = React.ComponentPropsWithoutRef<typeof Box> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

// Public Button component forwards refs and normalizes button vs. link semantics.
export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      variant = 'accent',
      size = 'md',
      fullWidth,
      as,
      type,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const element = as ?? 'button';
    const resolvedType = element === 'button' ? type ?? 'button' : type;
    const ariaDisabled = element !== 'button' && disabled ? true : undefined;

    return (
      <ButtonBase
        ref={ref}
        as={element as never}
        type={resolvedType}
        disabled={element === 'button' ? disabled : undefined}
        aria-disabled={ariaDisabled}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...rest}
      />
    );
  },
);

Button.displayName = 'Button';

// usage: <Button $variant="accent" $size="md" onClick={() => alert('Accent Button Clicked')}>Accent Button</Button>
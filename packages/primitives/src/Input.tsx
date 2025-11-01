// src/components/primitives/Input/Input.tsx
import React from "react";
import styled, { css } from "styled-components";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;

const StyledLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.colors.textPrimary || "#222"};
  margin-bottom: 0.4rem;
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1.5px solid
    ${({ hasError, theme }) =>
      hasError ? theme.color.colors.error || "#d9534f" : theme.color.colors.border || "#ccc"};
  background-color: ${({ theme }) => theme.color.colors.inputBg || "#fff"};
  font-size: 1rem;
  color: ${({ theme }) => theme.color.colors.textPrimary || "#222"};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.colors.primary || "#007bff"};
    box-shadow: 0 0 0 2px
      ${({ theme }) => (theme.color.colors.primary ? `${theme.color.colors.primary}33` : "#007bff33")};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      &:focus {
        border-color: #d9534f;
        box-shadow: 0 0 0 2px #d9534f33;
      }
    `}
`;

const ErrorText = styled.span`
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.color.colors.error || "#d9534f"};
  font-size: 0.85rem;
`;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth,
  id,
  ...rest
}) => {
  const inputId = id || React.useId();

  return (
    <InputWrapper fullWidth={fullWidth}>
      {label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
      <StyledInput id={inputId} hasError={!!error} {...rest} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};
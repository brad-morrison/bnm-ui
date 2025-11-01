// packages/primitives/src/Text.tsx
import styled from 'styled-components';
import { Box } from './Box';

type Size = 1 | 2 | 3; // keep small; scale later if you want
export const Text = styled(Box)<{
  $size?: Size;
  $muted?: boolean;
  $align?: React.CSSProperties['textAlign'];
  $weight?: React.CSSProperties['fontWeight'];
}>`
  margin: 0 0 ${({ theme }) => theme.space[2]};
  line-height: 1.5;
  text-align: ${({ $align }) => $align ?? 'inherit'};
  color: ${({ theme, $muted }) => ($muted ? theme.color.bg.subtle : 'inherit')};
  font-weight: ${({ $weight }) => $weight ?? 400};
  font-size: ${({ theme, $size = 2 }) => theme.font.size[$size]};
`;

// usage: <Text $size={2} $muted>Subtitle</Text>
// packages/primitives/src/Heading.tsx
import styled from 'styled-components';
import { Box } from './Box';

type Level = 1 | 2 | 3 | 4 | 5;

export const Heading = styled(Box)<{ $level?: Level; $align?: React.CSSProperties['textAlign'] }>`
  margin: 0 0 ${({ theme }) => theme.space[3]};
  line-height: 1.1;
  font-weight: 700;
  text-align: ${({ $align }) => $align ?? 'inherit'};
  font-size: ${({ theme, $level = 3 }) => theme.font.size[$level]};
`;

// usage: <Heading as="h1" $level={5}>Title</Heading>
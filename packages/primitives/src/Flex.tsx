import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';

// Transient props for styling only (won't end up as DOM attributes)
type FlexStyleProps = {
  $direction?: React.CSSProperties['flexDirection'];
  $align?: React.CSSProperties['alignItems'];
  $justify?: React.CSSProperties['justifyContent'];
  $wrap?: React.CSSProperties['flexWrap'];
  $inline?: boolean;
  $grow?: React.CSSProperties['flexGrow'];
  $shrink?: React.CSSProperties['flexShrink'];
  $basis?: React.CSSProperties['flexBasis'];
};

const FlexBase = styled(Box)<FlexStyleProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  flex-direction: ${({ $direction }) => $direction ?? 'row'};
  align-items: ${({ $align }) => $align ?? 'stretch'};
  justify-content: ${({ $justify }) => $justify ?? 'flex-start'};
  flex-wrap: ${({ $wrap }) => $wrap ?? 'nowrap'};
  flex-grow: ${({ $grow }) => ($grow !== undefined ? $grow : undefined)};
  flex-shrink: ${({ $shrink }) => ($shrink !== undefined ? $shrink : undefined)};
  flex-basis: ${({ $basis }) => ($basis !== undefined ? $basis : undefined)};
`;

// Public props (clean names)
export type FlexProps<E extends React.ElementType = 'div'> =
  Omit<React.ComponentPropsWithoutRef<typeof Box>, 'as'> & {
    as?: E;
    direction?: React.CSSProperties['flexDirection'];
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
    wrap?: React.CSSProperties['flexWrap'];
    inline?: boolean;
    grow?: React.CSSProperties['flexGrow'];
    shrink?: React.CSSProperties['flexShrink'];
    basis?: React.CSSProperties['flexBasis'];
  };

export const Flex = <E extends React.ElementType = 'div'>(props: FlexProps<E>) => {
  const { direction, align, justify, wrap, inline, grow, shrink, basis, ...rest } = props;
  return (
    <FlexBase
      {...(rest as any)}
      $direction={direction}
      $align={align}
      $justify={justify}
      $wrap={wrap}
      $inline={inline}
      $grow={grow}
      $shrink={shrink}
      $basis={basis}
    />
  );
};
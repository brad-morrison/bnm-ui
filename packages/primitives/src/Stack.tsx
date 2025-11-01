import React from 'react';
import { Flex, FlexProps } from './Flex';

/**
 * VStack – Vertical Stack (column flex layout)
 * HStack – Horizontal Stack (row flex layout)
 *
 * These are simple wrappers for readability and convenience.
 * They inherit everything from <Flex>.
 */

export type StackProps<E extends React.ElementType = 'div'> = FlexProps<E>;

export const VStack = <E extends React.ElementType = 'div'>(props: StackProps<E>) => {
  return <Flex direction="column" {...props} />;
};

export const HStack = <E extends React.ElementType = 'div'>(props: StackProps<E>) => {
  return <Flex direction="row" {...props} />;
};
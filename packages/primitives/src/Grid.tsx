import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';

/** Transient props: used for styling only, won’t be forwarded to the DOM */
type GridStyleProps = {
  $columns?: React.CSSProperties['gridTemplateColumns'];
  $rows?: React.CSSProperties['gridTemplateRows'];
  $areas?: React.CSSProperties['gridTemplateAreas'];
  $autoFlow?: React.CSSProperties['gridAutoFlow'];
  $autoRows?: React.CSSProperties['gridAutoRows'];
  $autoColumns?: React.CSSProperties['gridAutoColumns'];
  $placeItems?: React.CSSProperties['placeItems'];
  $placeContent?: React.CSSProperties['placeContent'];
  $justifyItems?: React.CSSProperties['justifyItems'];
  $alignItems?: React.CSSProperties['alignItems'];
};

const GridBase = styled(Box)<GridStyleProps>`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns ?? undefined};
  grid-template-rows: ${({ $rows }) => $rows ?? undefined};
  grid-template-areas: ${({ $areas }) => $areas ?? undefined};
  grid-auto-flow: ${({ $autoFlow }) => $autoFlow ?? undefined};
  grid-auto-rows: ${({ $autoRows }) => $autoRows ?? undefined};
  grid-auto-columns: ${({ $autoColumns }) => $autoColumns ?? undefined};
  place-items: ${({ $placeItems }) => $placeItems ?? undefined};
  place-content: ${({ $placeContent }) => $placeContent ?? undefined};
  justify-items: ${({ $justifyItems }) => $justifyItems ?? undefined};
  align-items: ${({ $alignItems }) => $alignItems ?? undefined};
`;

export type GridProps<E extends React.ElementType = 'div'> =
  Omit<React.ComponentPropsWithoutRef<typeof Box>, 'as'> & {
    as?: E;
    columns?: React.CSSProperties['gridTemplateColumns'];
    rows?: React.CSSProperties['gridTemplateRows'];
    areas?: React.CSSProperties['gridTemplateAreas'];
    autoFlow?: React.CSSProperties['gridAutoFlow'];
    autoRows?: React.CSSProperties['gridAutoRows'];
    autoColumns?: React.CSSProperties['gridAutoColumns'];
    placeItems?: React.CSSProperties['placeItems'];
    placeContent?: React.CSSProperties['placeContent'];
    justifyItems?: React.CSSProperties['justifyItems'];
    alignItems?: React.CSSProperties['alignItems'];
  };

export const Grid = <E extends React.ElementType = 'div'>(props: GridProps<E>) => {
  const {
    columns, rows, areas,
    autoFlow, autoRows, autoColumns,
    placeItems, placeContent, justifyItems, alignItems,
    ...rest
  } = props;

  return (
    <GridBase
      {...(rest as any)}
      $columns={columns}
      $rows={rows}
      $areas={areas}
      $autoFlow={autoFlow}
      $autoRows={autoRows}
      $autoColumns={autoColumns}
      $placeItems={placeItems}
      $placeContent={placeContent}
      $justifyItems={justifyItems}
      $alignItems={alignItems}
    />
  );
};
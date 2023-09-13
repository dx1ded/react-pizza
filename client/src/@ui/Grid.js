import styled from "styled-components"
import breakpoints from "@breakpoints"

// Grid can be: container | item

export const Grid = styled.div`
  /* stylelint-disable */

  display: ${(props) => props.$container && "grid"};
  grid-template-columns: ${(props) => props.$container && "repeat(12, 1fr)"};
  gap: ${(props) => props.$container && props.$gap};

  /* For grid item */

  grid-column: ${(props) => props.$item && props.$col && `span ${props.$col}`};
  align-items: ${(props) => props.$container && props.$align};
  justify-content: ${(props) => props.$container && props.$justify};

  @media (max-width: ${breakpoints.xxl}) {
    grid-column: ${(props) => props.$item && `span ${props["$col-xxl"]}`};
  }

  @media (max-width: ${breakpoints.xl}) {
    grid-column: ${(props) => props.$item && `span ${props["$col-xl"]}`};
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-column: ${(props) => props.$item && `span ${props["$col-lg"]}`};
  }

  @media (max-width: ${breakpoints.md}) {
    grid-column: ${(props) => props.$item && `span ${props["$col-md"]}`};
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-column: ${(props) => props.$item && `span ${props["$col-sm"]}`};
  }

  @media (max-width: ${breakpoints.xs}) {
    grid-column: ${(props) => props.$item && `span ${props["$col-xs"]}`};
  }
`

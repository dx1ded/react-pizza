import styled from "styled-components"
import breakpoints from "@breakpoints"

const sizes = {
  lg: "2rem",
  md: "1.25rem",
  adaptive: {
    [breakpoints.size.xl]: {
      lg: "1.75rem",
      md: "1.2rem",
    },
    [breakpoints.size.lg]: {
      lg: "1.5rem",
      md: "1.125rem",
    },
    [breakpoints.size.md]: {
      lg: "1.4rem",
      md: "1.1rem",
    },
  },
}

export const Heading = styled.h2`
  margin-bottom: ${(props) => props.$mb};
  font-size: ${(props) => sizes[props.$size] || props.$size};
  font-weight: ${(props) => props.$weight || 700};
  color: ${(props) => props.$color || "var(--black)"};

  @media ${breakpoints.device.xl} {
    font-size: ${(props) =>
      sizes.adaptive[breakpoints.size.xl][props.$size] || props.$size};
  }

  @media ${breakpoints.device.lg} {
    font-size: ${(props) =>
      sizes.adaptive[breakpoints.size.lg][props.$size] || props.$size};
  }

  @media ${breakpoints.device.md} {
    font-size: ${(props) =>
      sizes.adaptive[breakpoints.size.md][props.$size] || props.$size};
  }
`

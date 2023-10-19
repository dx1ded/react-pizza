import styled from "styled-components"
import breakpoints from "@breakpoints"

const sizes = {
  md: "1rem", // 16px
  sm: "0.875rem", // 14px
  adaptive: {
    [breakpoints.size.xl]: {
      md: "0.875rem",
      sm: "0.8125rem",
    },
  },
}

export const Text = styled.p`
  margin-top: ${(props) => props.$mt};
  margin-bottom: ${(props) => props.$mb};
  font-size: ${(props) => sizes[props.$size] || props.$size};
  font-weight: ${(props) => props.$weight || 700};
  color: ${(props) => props.$color || "var(--black)"};

  @media ${breakpoints.device.xl} {
    font-size: ${(props) =>
      sizes.adaptive[breakpoints.size.xl][props.$size] || props.$size};
  }
`

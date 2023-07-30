import styled from "styled-components"

const sizes = {
  md: "1rem", // 16px
  sm: "0.875rem", // 14px
}

export const Text = styled.p`
  font-family: var(--font);
  font-size: ${(props) => sizes[props.$size] || props.$size};
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
`

Text.defaultProps = {
  $color: "var(--black)",
  $weight: 700,
}

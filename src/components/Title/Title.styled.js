import styled from "styled-components"

const sizes = {
  lg: "2rem", // 32px
  md: "1.25rem", // 20px
}

export const Title = styled.h1`
  font-family: var(--font);
  font-size: ${(props) => sizes[props.$size] || props.$size};
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
`

Title.defaultProps = {
  $color: "var(--black)",
  $weight: 700,
}

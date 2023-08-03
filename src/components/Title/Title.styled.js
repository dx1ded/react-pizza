import styled from "styled-components"

const sizes = {
  lg: "2rem", // 32px
  md: "1.25rem", // 20px
}

export const Title = styled.h2`
  font-size: ${(props) => sizes[props.$size] || props.$size};
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  ${(props) => props.$mb && `margin-bottom: ${props.$mb}`}
`

Title.defaultProps = {
  $color: "var(--black)",
  $weight: 700,
}

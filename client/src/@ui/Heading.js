import styled from "styled-components"

const sizes = {
  lg: "2rem", // 32px
  md: "1.25rem", // 20px
}

export const Heading = styled.h2`
  margin-bottom: ${(props) => props.$mb};
  font-size: ${(props) => sizes[props.$size] || props.$size};
  font-weight: ${(props) => props.$weight || 700};
  color: ${(props) => props.$color || "var(--black)"};
`

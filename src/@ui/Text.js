import styled from "styled-components"

const sizes = {
  md: "1rem", // 16px
  sm: "0.875rem", // 14px
}

export const Text = styled.p`
  margin-bottom: ${(props) => props.$mb};
  font-size: ${(props) => sizes[props.$size] || props.$size};
  font-weight: ${(props) => props.$weight || 700};
  color: ${(props) => props.$color || "var(--black)"};
`

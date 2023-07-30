import styled from "styled-components"

export const Icon = styled.span.attrs(() => ({
  className: "material-symbols-outlined",
}))`
  font-size: ${(props) => props.$size};
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bg};

  &::after {
    content: "${(props) => props.$name}";
  }
`

Icon.defaultProps = {
  $bg: "transparent",
  $color: "var(--white)",
}

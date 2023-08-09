import styled from "styled-components"

export const Sections = styled.main`
  margin-top: ${(props) => props.$mt};
`

Sections.defaultProps = {
  $mt: "2.5rem",
}

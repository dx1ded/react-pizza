import styled from "styled-components"

export const Container = styled.div`
  max-width: calc(var(--design-mw) + var(--container-h-offset) * 2);
  padding: var(--container-v-offset) var(--container-h-offset);
  margin: 2.5rem auto 4rem;
  background-color: ${(props) => props.$bg};
  border-radius: 10px;
  box-shadow: var(--shade-1);
`

Container.defaultProps = {
  $bg: "var(--white)",
}

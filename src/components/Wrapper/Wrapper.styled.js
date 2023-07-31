import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: calc(var(--design-mw) + var(--container-h-offset) * 2);
  padding: var(--container-v-offset) 0 6rem;
  margin: 2.5rem auto 4rem;
  background-color: ${(props) => props.$bg};
  border-radius: 10px;
  box-shadow: var(--shade-1);
`

Wrapper.defaultProps = {
  $bg: "var(--white)",
}

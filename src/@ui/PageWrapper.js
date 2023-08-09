import styled from "styled-components"

export const PageWrapper = styled.div`
  max-width: calc(var(--design-mw) + var(--container-h-offset) * 2);
  padding: ${(props) => props.$pt || "var(--container-v-offset)"} 0
    ${(props) => props.$pb || "6rem"};
  margin: 2.5rem auto 4rem;
  background-color: ${(props) => props.$bg || "var(--white)"};
  border-radius: 10px;
  box-shadow: var(--shade-1);
`

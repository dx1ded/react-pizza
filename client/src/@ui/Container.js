import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  max-width: ${(props) =>
    props.$mw || "calc(var(--design-mw) + var(--container-h-offset) * 2)"};
  padding: 0 var(--container-h-offset);
  margin: 0 auto;
`

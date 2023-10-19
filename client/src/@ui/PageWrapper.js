import styled from "styled-components"
import breakpoints from "@breakpoints"

export const PageWrapper = styled.div`
  max-width: calc(var(--design-mw) + var(--container-h-offset) * 2);
  padding-top: ${(props) => props.$pt || "var(--container-v-offset)"};
  padding-bottom: ${(props) => props.$pb || "6rem"};
  margin: 2.5rem auto 4rem;
  background-color: ${(props) => props.$bg || "var(--white)"};
  border-radius: 10px;
  box-shadow: var(--shade-1);

  @media ${breakpoints.device.xl} {
    padding-bottom: ${(props) => props.$pb || "3rem"};
    margin: 0 auto;
    border-radius: 0;
  }
`

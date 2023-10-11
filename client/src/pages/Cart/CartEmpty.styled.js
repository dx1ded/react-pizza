import styled from "styled-components"
import { Text, Button } from "@ui"

export const StyledCartEmpty = styled.div`
  margin-top: 6rem;
  text-align: center;

  ${Text} {
    margin-bottom: 2.625rem;
    line-height: 1.4em;
  }

  img {
    display: block;
    max-width: 18.75rem;
    margin: 0 auto 4.625rem;
  }

  ${Button} {
    padding: 0.875rem 1.3rem;
    font-weight: 700;
    text-decoration: none;
  }
`

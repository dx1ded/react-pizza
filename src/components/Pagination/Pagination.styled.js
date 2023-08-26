import styled from "styled-components"
import { Icon } from "@ui"

export const StyledPagination = styled.nav`
  ul {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    list-style: none;
  }

  li {
    padding: 0.4rem 0.6rem;
    font-size: 0.875rem;
    cursor: pointer;
    background-color: var(--light-gray);
    border-radius: 4px;

    ${Icon} {
      vertical-align: middle;
    }

    &[data-active] {
      color: var(--white);
      background-color: var(--primary);
    }
  }
`

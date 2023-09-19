import styled from "styled-components"
import { Icon } from "@ui"

export const StyledPagination = styled.nav`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  list-style: none;
`

export const PaginationButton = styled.button`
  padding: 0.4rem 0.6rem;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: var(--light-gray);
  border: none;
  border-radius: 4px;
  outline: none;

  ${Icon} {
    vertical-align: middle;
  }

  &.active {
    color: var(--white);
    background-color: var(--primary);
  }
`

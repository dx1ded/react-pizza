import styled from "styled-components"
import { Container } from "@ui"

export const StyledFilter = styled.div`
  margin: 2.5rem 0 3.5rem;

  ${Container} {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    justify-content: space-between;
  }
`

export const FilterOptions = styled.div`
  display: flex;
  gap: 0.5625rem;
  align-items: center;
`

export const StyledOption = styled.div`
  input {
    display: none;

    &:checked + label {
      color: var(--white);
      background-color: var(--dark);
    }
  }

  label {
    padding: 0.8rem 1.5rem;
    font-weight: 700;
    color: var(--dark);
    cursor: pointer;
    background-color: var(--light-gray);
    border-radius: 30px;
  }
`

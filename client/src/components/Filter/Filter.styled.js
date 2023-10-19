import styled from "styled-components"
import breakpoints from "@breakpoints"

export const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5625rem;
  align-items: center;
`

export const StyledFilterOption = styled.div`
  input {
    display: none;

    &:checked + label {
      display: block;
      color: var(--white);
      background-color: var(--dark);
    }
  }

  label {
    display: block;
    padding: 0.8rem 1.5rem;
    font-weight: 700;
    color: var(--dark);
    cursor: pointer;
    background-color: var(--light-gray);
    border-radius: 30px;

    @media ${breakpoints.device.xl} {
      padding: 0.7rem 1.3rem;
      font-size: 0.875rem;
    }
  }
`

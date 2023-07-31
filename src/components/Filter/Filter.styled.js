import styled from "styled-components"

export const StyledFilter = styled.div`
  & > div {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
`

export const FilterOptions = styled.div`
  display: flex;
  gap: 0.5625rem;
  align-items: center;

  button {
    padding: 0.8rem 1.5rem;
    font-weight: 700;
  }
`

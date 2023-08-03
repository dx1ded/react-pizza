import styled from "styled-components"

export const StyledHeader = styled.header`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;
  }

  a {
    text-decoration: none;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const DivisionLine = styled.div`
  height: 2px;
  background-color: var(--light-gray);
`

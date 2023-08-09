import styled from "styled-components"

export const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
    list-style: none;
  }

  a {
    position: relative;
  }
`

export const NewMessages = styled.span`
  position: absolute;
  right: -6px;
  bottom: 1px;
  width: 1rem;
  height: 1rem;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1rem;
  color: var(--white);
  text-align: center;
  background-color: red;
  border-radius: 100%;
`

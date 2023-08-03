import styled from "styled-components"

export const StyledSearch = styled.div`
  position: relative;
  flex-basis: 30rem;
`

export const SearchInput = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    padding: 0.6rem 0.6rem 0.6rem 2.4rem;
    color: var(--dark);
    border: 0.5px solid var(--gray);
    border-radius: 5px;
    outline: none;
  }
`

export const SearchResultList = styled.ul`
  position: absolute;
  z-index: var(--z-search);
  display: none;
  width: 100%;
  list-style: none;
  background-color: var(--white);
  border: 0.5px solid var(--gray);
  border-top: none;
  border-radius: 0 0 5px 5px;

  li {
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid var(--light-gray);
  }
`

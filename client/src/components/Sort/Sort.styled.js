import styled from "styled-components"

export const StyledSort = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const SortTriangle = styled.div`
  border-color: transparent transparent var(--dark) transparent;
  border-style: solid;
  border-width: 0 5px 5px;
  border-radius: 5px;
`

export const SortOptions = styled.div`
  position: relative;

  & > button {
    padding-bottom: 0.1rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-bottom: 1px dashed var(--primary);
    outline: none;
  }
`

export const SortOptionsList = styled.ul`
  position: absolute;
  right: 0;
  width: 8.25rem;
  padding: 0.625rem 0;
  list-style: none;
  visibility: hidden;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shade-1);
  opacity: 0;
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;
  transform: translateY(0.8rem);

  li {
    padding: 0.625rem 0.875rem;
    text-decoration: none;
    cursor: pointer;
  }
`

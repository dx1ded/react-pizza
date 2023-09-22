import styled from "styled-components"
import { Text } from "@ui"

export const Triangle = styled.div`
  border-color: transparent transparent var(--dark) transparent;
  border-style: solid;
  border-width: 0 5px 5px;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
`

export const SortWrapper = styled.div`
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

export const SortOptions = styled.ul`
  position: absolute;
  right: 0;
  z-index: var(--z-sort-list);
  width: 9rem;
  padding: 0.625rem 0;
  list-style: none;
  visibility: hidden;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shade-1);
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  transform: translateY(0.8rem);
`

export const StyledOption = styled.div`
  input {
    display: none;

    &:checked + label {
      font-weight: 700;
      color: var(--primary);
    }
  }

  label {
    display: block;
    padding: 0.625rem 0.875rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--black);
    cursor: pointer;
  }
`

export const StyledSort = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &.opened {
    ${SortOptions} {
      visibility: visible;
      opacity: 1;
    }

    ${Triangle} {
      transform: rotate(180deg);
    }
  }
`

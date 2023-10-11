import styled from "styled-components"

export const StyledDropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  z-index: var(--z-dropdown);
  min-width: 7rem;
  visibility: ${(props) => (props.$isOpened ? "visible" : "hidden")};
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shade-1);
  opacity: ${(props) => (props.$isOpened ? 1 : 0)};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;

  & > * {
    display: block;
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--dark);
    text-align: left;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--light-gray);
    }

    &:first-child {
      border-radius: 10px 10px 0 0;
    }

    &:last-child {
      border-radius: 0 0 10px 10px;
    }
  }
`

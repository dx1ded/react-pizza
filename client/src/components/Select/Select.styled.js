import styled from "styled-components"

export const StyledSelect = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: var(--z-select);
  width: 100%;
  min-width: 9rem;
  max-height: 10rem;
  padding: 0.625rem 0;
  overflow-y: auto;
  list-style: none;
  visibility: ${(props) => (props.$isOpened ? "visible" : "hidden")};
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shade-1);
  opacity: ${(props) => (props.$isOpened ? 1 : 0)};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  transform: translateY(calc(100% + 0.8rem));
`

export const Option = styled.div`
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

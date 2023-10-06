import styled from "styled-components"

export const StyledSort = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  & > button {
    padding-bottom: 0.1rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-bottom: 1px dashed var(--primary);
    outline: none;
  }
`

export const Triangle = styled.div`
  border-color: transparent transparent var(--dark) transparent;
  border-style: solid;
  border-width: 0 5px 5px;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.$isRotated ? "rotate(180deg)" : "none")};
`

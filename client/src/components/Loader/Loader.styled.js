import styled, { keyframes } from "styled-components"

const spin = keyframes`
  100% { transform: rotate(0.5turn) }
`

export const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.$size || "1rem"};
  height: ${(props) => props.$size || "1rem"};
  transform: translate(-50%, -50%);

  div {
    width: 100%;
    height: 100%;
    border: 3px solid;
    border-color: var(--blue) transparent;
    border-radius: 100%;
    animation: ${spin} 1s infinite;
  }
`

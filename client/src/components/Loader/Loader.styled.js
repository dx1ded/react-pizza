import styled, { keyframes } from "styled-components"

const spin = keyframes`
  100% { transform: rotate(0.5turn) }
`

export const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    width: ${(props) => props.$size || "1rem"};
    height: ${(props) => props.$size || "1rem"};
    border: 3px solid;
    border-color: var(--blue) transparent;
    border-radius: 100%;
    animation: ${spin} 1s infinite;
  }
`

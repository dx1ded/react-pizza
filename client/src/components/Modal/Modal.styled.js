import styled, { keyframes } from "styled-components"
import { Button, Icon } from "@ui"
import breakpoints from "@breakpoints"

const slideDown = keyframes`
  from {
    transform: translateY(-10rem);
    opacity: 0;
  }
  
  to {
    transform: none;
    opacity: 1;
  }
`

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-modal);
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow-y: auto;
  background-color: rgb(0 0 0 / 50%);
`
export const ModalContainer = styled.div`
  max-width: fit-content;
  padding: 1.5rem 1rem;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 10px;
  animation-name: ${slideDown};
  animation-duration: 0.4s;

  @media ${breakpoints.device.xs} {
    padding: 1rem;
  }
`

export const ModalHeader = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--light-gray);
`

export const ModalClose = styled.button`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;

  ${Icon} {
    width: 100%;
  }
`

export const ModalFooter = styled.footer`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
  padding-top: 1rem;
  margin-top: 1.5rem;
  border-top: 1px solid var(--light-gray);

  ${Button} {
    padding: 0.5rem 0.8rem;
    font-size: 0.875rem;

    @media ${breakpoints.device.lg} {
      padding: 0.4rem 0.7rem;
      font-size: 0.8rem;
    }
  }
`

export const ModalRemoveButton = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const ModalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  align-items: end;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media ${breakpoints.device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.device.xs} {
    grid-template-columns: 1fr;
  }
`

export const ModalWrapper = styled.div`
  position: relative;
`

export const ModalLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.3rem;
  font-weight: 700;
`

export const ModalInput = styled.input`
  display: block;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: 1px solid var(--gray);
  border-radius: 20px;

  @media ${breakpoints.device.lg} {
    padding: 0.4rem;
    font-size: 0.8rem;
  }
`

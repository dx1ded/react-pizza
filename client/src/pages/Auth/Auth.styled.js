import styled from "styled-components"
import { Button, Container, Input, Text } from "@ui"

export const StyledAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  ${Container} {
    width: 100%;
    padding: 3.5rem 2rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
  }
`

export const ValidationResult = styled.p`
  position: absolute;
  top: 50%;
  right: -1rem;
  width: 100%;
  max-width: 14rem;
  padding: 0.7rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: red;
  visibility: ${(props) => (props.$hasError ? "visible" : "hidden")};
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: var(--shade-1);
  opacity: ${(props) => (props.$hasError ? 1 : 0)};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  transform: translate(100%, -50%);

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    content: "";
    border-color: transparent red transparent transparent;
    border-style: solid;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    transform: translate(-100%, -50%);
  }
`

export const InputWrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${Input} {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
  }
`

export const LabelledInput = styled.div`
  position: relative;

  label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 100%;
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--white);
    background-color: var(--primary);
    border-radius: 30px 0 0 30px;
  }

  ${Input} {
    padding-left: 3.7rem;
  }
`

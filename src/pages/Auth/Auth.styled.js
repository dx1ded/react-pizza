import styled from "styled-components"
import { Button, Input, Text } from "@ui"

export const StyledAuth = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 28rem;
  transform: translate(-50%, -50%);
`

export const StyledForm = styled.div`
  padding: 2rem 1.5rem;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shade-1);

  form {
    margin-bottom: 1.3rem;
  }
`

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.3rem;
  font-weight: 700;
`

export const FormInput = styled(Input).attrs({
  $type: "primary",
})`
  display: block;
  width: 100%;
  padding: 0.6rem 0.8rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const FormSubmit = styled(Button).attrs({
  as: "input",
  $type: "primary",
  type: "submit",
})`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-weight: 700;
  border-radius: 5px;
`

export const FormChange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormChangeButton = styled(Text).attrs({
  as: "button",
  $size: "md",
  $color: "var(--blue)",
})`
  margin-left: 0.4rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

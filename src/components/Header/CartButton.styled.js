import styled from "styled-components"
import { Button } from "@components/Button/Button.styled"

export const StyledCartButton = styled(Button)`
  display: flex;
  flex: 1 0 9.375rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem 1rem 1.375rem;
  text-align: center;
`

export const CartButtonLine = styled.div`
  width: 1px;
  height: 1.125rem;
  background-color: var(--white);
`

export const CartButtonItems = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`

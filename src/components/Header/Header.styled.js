import styled from "styled-components"
import { Button } from "@components/Button/Button.styled"

export const StyledHeader = styled.header`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;
  }

  a {
    text-decoration: none;
  }
`

export const CartButton = styled(Button)`
  display: flex;
  flex-basis: 9.375rem;
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

export const DivisionLine = styled.div`
  height: 2px;
  background-color: var(--light-gray);
`

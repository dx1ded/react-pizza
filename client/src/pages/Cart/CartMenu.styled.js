import styled from "styled-components"
import { Icon, Heading, Button } from "@ui"
import { NavLink } from "react-router-dom"

export const StyledCartMenu = styled.section`
  margin-top: 5.875rem;
`

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const CartLogo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const CartClear = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;

  ${Icon} {
    margin: -0.2rem 0.5rem 0 0;
  }
`

export const CartList = styled.ul`
  display: grid;
  gap: 1.875rem;
  margin-bottom: 2.5rem;
`

export const CartSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  ${Heading} span {
    font-weight: 700;
  }

  ${Heading}:nth-child(2) span {
    color: var(--primary);
  }
`

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    padding: 0.9rem 2rem;
    font-weight: 700;
  }
`

export const GoBack = styled(Button).attrs({
  as: NavLink,
})`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;

  ${Icon} {
    font-size: 1rem;
    font-weight: inherit;
    color: currentcolor;
  }
`

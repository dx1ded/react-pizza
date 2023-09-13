import styled from "styled-components"
import { Icon, Heading, Button } from "@ui"
import { NavLink } from "react-router-dom"

export const StyledCartMenu = styled.section`
  max-width: 51.5rem;
  margin: 5.875rem auto 0;
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

  ${Heading}:nth-child(1) span {
    font-weight: 700;
  }

  ${Heading}:nth-child(2) span {
    font-weight: 700;
    color: var(--primary);
  }
`

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    padding: 1.125rem 2.5rem;
    font-weight: 700;
  }
`

export const GoBack = styled(Button).attrs({
  as: NavLink,
  $type: "light_gray",
})`
  font-weight: 400;
  text-decoration: none;

  ${Icon} {
    margin: -0.25rem 0.5rem 0 0;
    font-weight: 700;
    color: currentcolor;
    vertical-align: middle;
  }
`

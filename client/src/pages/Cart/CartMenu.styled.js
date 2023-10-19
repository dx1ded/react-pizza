import styled from "styled-components"
import { Icon, Heading, Button } from "@ui"
import { NavLink } from "react-router-dom"
import breakpoints from "@breakpoints"

export const StyledCartMenu = styled.section`
  margin-top: 5.875rem;

  @media ${breakpoints.device.xl} {
    margin-top: 4rem;
  }

  @media ${breakpoints.device.md} {
    margin-top: 2rem;
  }
`

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media ${breakpoints.device.xl} {
    margin-bottom: 1.2rem;
  }
`

export const CartLogo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  ${Icon} {
    @media ${breakpoints.device.xl} {
      font-size: 1.8rem;
    }

    @media ${breakpoints.device.md} {
      font-size: 1.4rem;
    }
  }

  @media ${breakpoints.device.xl} {
    gap: 0.6rem;
  }
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

  @media ${breakpoints.device.lg} {
    gap: 1.4rem;
  }
`

export const CartSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  ${Heading} {
    span {
      font-weight: 700;
    }

    &:nth-child(2) span {
      color: var(--primary);
    }

    @media ${breakpoints.device.md} {
      font-size: 1rem;
    }
  }

  @media ${breakpoints.device.lg} {
    margin-bottom: 1.5rem;
  }

  @media ${breakpoints.device.xs} {
    margin-bottom: 1rem;
  }
`

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    padding: 0.9rem 2rem;
    font-weight: 700;

    @media ${breakpoints.device.lg} {
      padding: 0.8rem 1.5rem;
      font-size: 0.875rem;
    }

    @media ${breakpoints.device.md} {
      padding: 0.7rem 1.4rem;
      font-size: 0.8rem;
    }
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

import styled from "styled-components"
import { Button, Heading, Text } from "@ui"
import breakpoints from "@breakpoints"

export const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.875rem;
  border-top: 1px solid var(--light-gray);

  & > ${Heading} {
    @media ${breakpoints.device.md} {
      font-size: 1rem;
    }
  }

  @media ${breakpoints.device.lg} {
    padding-top: 1.4rem;
  }
`

export const CartItemContent = styled.div`
  display: flex;
  flex-basis: 18.75rem;
  gap: 1.5rem;
  align-items: center;

  @media ${breakpoints.device.xl} {
    flex-basis: 16rem;
    gap: 1rem;
  }

  @media ${breakpoints.device.md} {
    flex-basis: 13rem;
    gap: 0.75rem;
  }

  @media (width <= 25em) {
    flex-basis: 10rem;
  }
`

export const CartItemImage = styled.img`
  max-width: 5rem;

  @media ${breakpoints.device.xl} {
    max-width: 4rem;
  }

  @media ${breakpoints.device.md} {
    max-width: 2.5rem;
  }

  @media (width <= 25em) {
    display: none;
  }
`

export const CartItemName = styled.div`
  ${Heading} {
    @media ${breakpoints.device.md} {
      font-size: 1rem;
    }
  }

  ${Text} {
    @media ${breakpoints.device.xl} {
      font-size: 1rem;
    }

    @media ${breakpoints.device.md} {
      font-size: 0.875rem;
    }
  }
`

export const CartItemCounter = styled.form`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  ${Button} {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-width: 1.5px;
    border-radius: 100%;

    @media ${breakpoints.device.lg} {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1rem;
    }

    @media ${breakpoints.device.md} {
      width: 1.25rem;
      height: 1.25rem;
      font-size: 0.875rem;
    }
  }

  input {
    width: 1rem;
    font-size: 1.375rem;
    font-weight: 700;
    text-align: center;
    appearance: textfield;
    border: none;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      appearance: none;
    }

    @media ${breakpoints.device.lg} {
      font-size: 1.2rem;
    }

    @media ${breakpoints.device.md} {
      font-size: 1rem;
    }
  }

  @media ${breakpoints.device.lg} {
    gap: 0.5rem;
  }

  @media ${breakpoints.device.md} {
    gap: 0.25rem;
  }
`

export const CartItemDelete = styled(Button).attrs({
  $type: "light_gray",
})`
  width: 2rem;
  height: 2rem;
  border-width: 2px;
  transform: rotate(45deg);

  span {
    font-size: 1.5rem;
    font-weight: 700;

    @media ${breakpoints.device.lg} {
      font-size: 1.2rem;
    }

    @media ${breakpoints.device.md} {
      font-size: 1rem;
    }
  }

  @media ${breakpoints.device.lg} {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media ${breakpoints.device.md} {
    width: 1.25rem;
    height: 1.25rem;
  }
`

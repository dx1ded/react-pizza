import styled from "styled-components"

export const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.875rem;
  border-top: 1px solid var(--light-gray);

  /* Delete button */

  & > button {
    width: 2rem;
    height: 2rem;
    border-width: 2px;
    transform: rotate(45deg);

    span {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`

export const CartItemWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`

export const CartItemImage = styled.img`
  width: 5rem;
  height: 5rem;
`

export const CartItemInfo = styled.div`
  h3 {
    margin-bottom: 0.2rem;
  }
`

export const CartItemCounter = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  button {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-width: 1.5px;
    border-radius: 100%;
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
  }
`

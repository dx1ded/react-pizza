import styled from "styled-components"

export const StyledCartMenu = styled.section`
  max-width: 51.5rem;
  margin: 0 auto 2rem;
`

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const CartHeaderName = styled.div`
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

  span:nth-child(1) {
    margin: -0.2rem 0.5rem 0 0;
  }
`

export const CartItems = styled.ul`
  display: grid;
  gap: 1.875rem;
  margin-bottom: 2.5rem;
`

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h3:nth-child(1) span {
    font-weight: 700;
  }

  h3:nth-child(2) span {
    font-weight: 700;
    color: var(--primary);
  }
`

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    padding: 1.125rem 2.5rem;
    font-weight: 400;
    text-decoration: none;

    span {
      margin: -0.25rem 0.5rem 0 0;
      font-weight: 700;
      vertical-align: middle;
    }
  }

  button {
    padding: 1.125rem 2.5rem;
    font-weight: 700;
  }
`

import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { StyledHeader } from "@components/Header/Header.styled"
import { Logo } from "@components/Logo/Logo"
import { Text } from "@components/Text/Text.styled"
import { Button } from "@components/Button/Button.styled"
import { Icon } from "@components/Icon/Icon.styled"

const StyledCartButton = styled(Button)`
  display: flex;
  flex-basis: 9.375rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem 1rem 1.375rem;
  text-align: center;

  .white-line {
    width: 1px;
    height: 1.125rem;
    background-color: var(--white);
  }

  .cart-items {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }
`

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <StyledCartButton as={NavLink} $type="primary" to="/cart">
        <Text $size="md" $color="var(--white)">
          520 $
        </Text>
        <div className="white-line" />
        <div className="cart-items">
          <Icon $name="shopping_cart" $size="16px" />
          <Text $size="md" $color="var(--white)">
            3
          </Text>
        </div>
      </StyledCartButton>
    </StyledHeader>
  )
}

import { NavLink } from "react-router-dom"
import {
  StyledHeader,
  CartButton,
  CartButtonLine,
  CartButtonItems,
  DivisionLine,
} from "@components/Header/Header.styled"
import { Container } from "@components/Container/Container.styled"
import { Logo } from "@components/Logo/Logo"
import { Text } from "@components/Text/Text.styled"
import { Icon } from "@components/Icon/Icon.styled"

export function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Logo />
          <CartButton as={NavLink} $type="primary" to="/cart">
            <Text $size="md" $color="var(--white)">
              520 $
            </Text>
            <CartButtonLine />
            <CartButtonItems>
              <Icon $name="shopping_cart" $size="16px" />
              <Text $size="md" $color="var(--white)">
                3
              </Text>
            </CartButtonItems>
          </CartButton>
        </Container>
      </StyledHeader>
      <DivisionLine />
    </>
  )
}

import { NavLink } from "react-router-dom"
import { Text } from "@components/Text/Text.styled"
import { Icon } from "@components/Icon/Icon.styled"
import {
  StyledCartButton,
  CartButtonItems,
  CartButtonLine,
} from "./CartButton.styled"

export function CartButton() {
  return (
    <StyledCartButton as={NavLink} $type="primary" to="/cart">
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
    </StyledCartButton>
  )
}

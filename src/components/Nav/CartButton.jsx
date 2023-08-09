import { Text, Icon } from "@ui"
import { StyledCartButton, CartIcon } from "./CartButton.styled"

export function CartButton() {
  return (
    <StyledCartButton to="/cart">
      <Text $size="md" $color="var(--white)">
        520 $
      </Text>
      <CartIcon>
        <Icon $size="1.4rem">shopping_cart</Icon>
        <Text $size="0.625rem" $color="var(--white)">
          3
        </Text>
      </CartIcon>
    </StyledCartButton>
  )
}

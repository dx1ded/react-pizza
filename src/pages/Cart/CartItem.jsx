import { Text, Button, Heading } from "@ui"
import {
  CartItemContent,
  CartItemCounter,
  CartItemDelete,
  CartItemImage,
  CartItemName,
  StyledCartItem,
} from "./CartItem.styled"

export function Counter() {
  return (
    <CartItemCounter>
      <Button $type="secondary" aria-label="Subtract counter with 1">
        -
      </Button>
      <input type="number" defaultValue={1} />
      <Button $type="secondary" aria-label="Add counter with 1">
        +
      </Button>
    </CartItemCounter>
  )
}

export function CartItem() {
  return (
    <StyledCartItem>
      <CartItemContent>
        <CartItemImage src="/pizza-img.png" />
        <CartItemName>
          <Heading as="h3" $size="md" $mb="0.2rem">
            Raw chicken
          </Heading>
          <Text $size="1.125rem" $color="var(--gray)" $weight="400">
            thin dough, 26 cm.
          </Text>
        </CartItemName>
      </CartItemContent>
      <Counter />
      <Heading as="h3" $size="md">
        20 $
      </Heading>
      <CartItemDelete aria-label="Delete item from cart">
        <span aria-hidden="true">+</span>
      </CartItemDelete>
    </StyledCartItem>
  )
}

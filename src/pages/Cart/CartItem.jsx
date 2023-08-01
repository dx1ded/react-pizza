import { Text } from "@components/Text/Text.styled"
import { Button } from "@components/Button/Button.styled"
import { Title } from "@components/Title/Title.styled"
import {
  CartItemCounter,
  CartItemImage,
  CartItemInfo,
  CartItemWrapper,
  StyledCartItem,
} from "@/pages/Cart/CartItem.styled"

export function Counter() {
  return (
    <CartItemCounter>
      <Button $type="secondary" aria-label="Subtract counter with 1">
        -
      </Button>
      <input type="number" defaultValue="1" />
      <Button $type="secondary" aria-label="Add counter with 1">
        +
      </Button>
    </CartItemCounter>
  )
}

export function CartItem() {
  return (
    <StyledCartItem>
      <CartItemWrapper>
        <CartItemImage src="/pizza-img.png" />
        <CartItemInfo>
          <Title as="h3" $size="md">
            Raw chicken
          </Title>
          <Text $size="1.125rem" $color="var(--gray)" $weight="400">
            thin dough, 26 cm.
          </Text>
        </CartItemInfo>
      </CartItemWrapper>
      <Counter />
      <Title as="h3" $size="md">
        20 $
      </Title>
      <Button $type="light_gray" aria-label="Delete item from cart">
        <span aria-hidden="true">+</span>
      </Button>
    </StyledCartItem>
  )
}

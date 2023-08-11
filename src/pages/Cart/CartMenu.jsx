import { Container, Icon, Heading, Text, Button } from "@ui"
import {
  CartActions,
  CartClear,
  CartHeader,
  CartLogo,
  StyledCartMenu,
  CartList,
  CartSummary,
  GoBack,
} from "./CartMenu.styled"
import { CartItem } from "./CartItem"

export function CartMenu() {
  return (
    <StyledCartMenu>
      <Container>
        <CartHeader>
          <CartLogo>
            <Icon $size="2.2rem" $color="#3F3F3F">
              shopping_cart
            </Icon>
            <Heading $size="lg">Cart</Heading>
          </CartLogo>
          <CartClear>
            <Icon $size="1.25rem" $color="var(--secondary)">
              delete
            </Icon>
            <Text as="span" $size="md" $color="var(--secondary)">
              Clear cart
            </Text>
          </CartClear>
        </CartHeader>
        <CartList>
          <CartItem />
          <CartItem />
          <CartItem />
        </CartList>
        <CartSummary>
          <Heading as="h3" $size="md" $weight="400">
            All pizzas: <span>3 pc.</span>
          </Heading>
          <Heading as="h3" $size="md" $weight="400">
            Order sum: <span>60 $</span>
          </Heading>
        </CartSummary>
        <CartActions>
          <GoBack to="/">
            <Icon $size="1.1rem">arrow_back_ios_new</Icon>
            Go back
          </GoBack>
          <Button $type="primary">Pay now</Button>
        </CartActions>
      </Container>
    </StyledCartMenu>
  )
}

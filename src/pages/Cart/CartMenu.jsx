import { Container } from "@components/Container/Container.styled"
import { Icon } from "@components/Icon/Icon.styled"
import { Title } from "@components/Title/Title.styled"
import { Text } from "@components/Text/Text.styled"
import { NavLink } from "react-router-dom"
import { Button } from "@components/Button/Button.styled"
import {
  CartActions,
  CartClear,
  CartHeader,
  CartHeaderName,
  CartInfo,
  CartItems,
  StyledCartMenu,
} from "@/pages/Cart/CartMenu.styled"
import { CartItem } from "./CartItem"

export function CartMenu() {
  return (
    <StyledCartMenu>
      <Container>
        <CartHeader>
          <CartHeaderName>
            <Icon $name="shopping_cart" $size="2.2rem" $color="#3F3F3F" />
            <Title as="h2" $size="2rem">
              Cart
            </Title>
          </CartHeaderName>
          <CartClear>
            <Icon $name="delete" $size="1.25rem" $color="#B6B6B6" />
            <Text as="span" $size="md" $color="#B6B6B6">
              Clear cart
            </Text>
          </CartClear>
        </CartHeader>
        <CartItems>
          <CartItem />
          <CartItem />
          <CartItem />
        </CartItems>
        <CartInfo>
          <Title as="h3" $size="1.375rem" $weight="400">
            All pizzas: <span>3 pc.</span>
          </Title>
          <Title as="h3" $size="1.375rem" $weight="400">
            Order sum: <span>60 $</span>
          </Title>
        </CartInfo>
        <CartActions>
          <Button as={NavLink} $type="light_gray" to="/">
            <Icon
              $name="arrow_back_ios_new"
              $size="1.1rem"
              $color="currentColor"
            />
            Go back
          </Button>
          <Button $type="primary">Pay now</Button>
        </CartActions>
      </Container>
    </StyledCartMenu>
  )
}

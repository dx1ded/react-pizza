import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Icon, Heading, Text, Button } from "@ui"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { clearCart, setCartProducts } from "@redux/cart/actions"
import { CartItem } from "./CartItem"
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
import { CartItemsSkeleton } from "./CartItemsSkeleton"

export function CartMenu() {
  const request = useSecuredRequest()
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.cart.products)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    request("/api/products/listByIds", {
      method: "POST",
      data: { ids: Object.keys(JSON.parse(localStorage.getItem("cart"))) },
    }).then((response) => {
      dispatch(setCartProducts(response.items))
      setIsLoading(false)
    })
  }, [request, dispatch])

  const totalPrice = cartProducts.reduce(
    (acc, el) => (acc += el.price * el.count),
    0
  )

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
          <CartClear onClick={() => dispatch(clearCart())}>
            <Icon $size="1.25rem" $color="var(--secondary)">
              delete
            </Icon>
            <Text as="span" $size="md" $color="var(--secondary)">
              Clear cart
            </Text>
          </CartClear>
        </CartHeader>
        <CartList>
          {isLoading ? (
            <CartItemsSkeleton />
          ) : (
            cartProducts.map((product) => (
              <CartItem key={product._id} product={product} />
            ))
          )}
        </CartList>
        <CartSummary>
          <Heading as="h3" $size="md" $weight="400">
            All pizzas: <span>{cartProducts.length} pc.</span>
          </Heading>
          <Heading as="h3" $size="md" $weight="400">
            Order sum: <span>{totalPrice} $</span>
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

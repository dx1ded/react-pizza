import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, setCartProducts } from "@redux/cart/actions"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { Container, Icon, Heading, Text, Button } from "@ui"
import { CartItem } from "./CartItem"
import { CartItemSkeleton } from "./CartItem.skeleton"
import { calculateTotal } from "../../utils"
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

export function CartMenu() {
  const dispatch = useDispatch()
  const request = useSecuredRequest()
  const navigate = useNavigate()
  const cartProducts = useSelector((state) => state.cart.products)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    request("/api/products/listByIds", {
      method: "POST",
      data: { ids: Object.keys(JSON.parse(localStorage.getItem("cart"))) },
    }).then((data) => {
      dispatch(setCartProducts(data.items))
      setIsLoading(false)
    })
  }, [request, dispatch])

  return (
    <StyledCartMenu>
      <Container $mw="60rem">
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
            <>
              <CartItemSkeleton />
              <CartItemSkeleton />
              <CartItemSkeleton />
            </>
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
            Order sum: <span>{calculateTotal(cartProducts)} $</span>
          </Heading>
        </CartSummary>
        <CartActions>
          <GoBack $type="light_gray" to="/">
            <Icon $size="1.1rem">arrow_back_ios_new</Icon>
            Go back
          </GoBack>
          <Button $type="primary" onClick={() => navigate("/checkout")}>
            Pay now
          </Button>
        </CartActions>
      </Container>
    </StyledCartMenu>
  )
}

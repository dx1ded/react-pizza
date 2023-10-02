import { useState, useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { Text, Icon } from "@ui"
import { StyledCartButton, CartIcon } from "./CartButton.styled"

export function CartButton() {
  const request = useSecuredRequest()
  const cartList = useSelector((state) => state.cart.list)
  const cartProducts = useSelector((state) => state.cart.products)
  const [totalPrice, setTotalPrice] = useState(0)
  const location = useLocation()

  const totalCount = useMemo(
    () => Object.values(cartList).reduce((acc, num) => (acc += num), 0),
    [cartList]
  )

  useEffect(() => {
    if (location.pathname !== "/cart") {
      request("/api/products/totalPrice", {
        method: "POST",
        data: { products: cartList },
      }).then((response) => {
        setTotalPrice(response.totalPrice)
      })
    } else {
      setTotalPrice(
        cartProducts.reduce(
          (acc, product) => (acc += product.price * product.count),
          0
        )
      )
    }
  }, [cartList, cartProducts, request, location])

  return (
    <StyledCartButton to="/cart">
      <Text $size="md" $color="var(--white)">
        {totalPrice} $
      </Text>
      <CartIcon>
        <Icon $size="1.4rem">shopping_cart</Icon>
        <Text $size="0.625rem" $color="var(--white)">
          {totalCount}
        </Text>
      </CartIcon>
    </StyledCartButton>
  )
}

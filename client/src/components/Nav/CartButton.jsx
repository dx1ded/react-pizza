import { useState, useMemo } from "react"
import { useSelector } from "react-redux"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { Text, Icon } from "@ui"
import { StyledCartButton, CartIcon, CartPrice } from "./CartButton.styled"
import { Loader } from "../Loader/Loader"

export function CartButton() {
  const request = useSecuredRequest()
  const cartList = useSelector((state) => state.cart.list)
  const [price, setPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const getPrice = () => {
    setIsLoading(true)
    request("/api/cart/getPrice", {
      method: "POST",
      data: { cart: cartList },
    }).then((data) => {
      setPrice(data.price)
      setIsLoading(false)
    })
  }

  const count = useMemo(
    () => Object.values(cartList).reduce((acc, num) => (acc += num), 0),
    [cartList]
  )

  return (
    <StyledCartButton $type="primary" to="/cart" onMouseEnter={getPrice}>
      {isLoading ? (
        <Loader />
      ) : (
        <CartPrice $size="md" $color="var(--white)">
          {price} $
        </CartPrice>
      )}
      <CartIcon>
        <Icon $size="1.4rem">shopping_cart</Icon>
        <Text $size="0.625rem" $color="var(--white)">
          {count}
        </Text>
      </CartIcon>
    </StyledCartButton>
  )
}

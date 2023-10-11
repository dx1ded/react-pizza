import { useRef } from "react"
import { useDispatch } from "react-redux"
import { changeCartBy, removeFromCart } from "@redux/cart/actions"
import { Text, Button, Heading } from "@ui"
import { types } from "../../utils"
import {
  CartItemContent,
  CartItemCounter,
  CartItemDelete,
  CartItemImage,
  CartItemName,
  StyledCartItem,
} from "./CartItem.styled"

export function Counter({ id, count }) {
  const dispatch = useDispatch()
  const counterRef = useRef(null)

  const changeHandler = (event) => {
    event.preventDefault()
    dispatch(
      changeCartBy({
        id,
        value: +counterRef.current.value,
      })
    )
  }

  return (
    <CartItemCounter onSubmit={changeHandler}>
      <Button
        $type="secondary"
        aria-label="Subtract counter with 1"
        onClick={() => counterRef.current.stepDown()}
      >
        -
      </Button>
      <input
        type="number"
        defaultValue={count}
        min={1}
        max={9}
        ref={counterRef}
      />
      <Button
        $type="secondary"
        aria-label="Add counter with 1"
        onClick={() => counterRef.current.stepUp()}
      >
        +
      </Button>
    </CartItemCounter>
  )
}

export function CartItem({ product }) {
  const dispatch = useDispatch()
  const [_, type, size] = product._id.split("_")

  return (
    <StyledCartItem>
      <CartItemContent>
        <CartItemImage src={product.imageUrl} />
        <CartItemName>
          <Heading as="h3" $size="md" $mb="0.2rem">
            {product.title}
          </Heading>
          <Text $size="1.125rem" $color="var(--gray)" $weight="400">
            {types[type]} dough, {size} cm.
          </Text>
        </CartItemName>
      </CartItemContent>
      <Counter id={product._id} count={product.count} />
      <Heading as="h3" $size="md">
        {product.price * product.count} $
      </Heading>
      <CartItemDelete
        aria-label="Delete item from cart"
        onClick={() => dispatch(removeFromCart(product._id))}
      >
        <span aria-hidden="true">+</span>
      </CartItemDelete>
    </StyledCartItem>
  )
}

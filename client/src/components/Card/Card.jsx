import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Heading, Button } from "@ui"
import { addToCart } from "@redux/cart/actions"
import {
  CardDetails,
  CardImage,
  CardOption,
  CardOptions,
  CardOptionsGroup,
  StyledCard,
} from "./Card.styled"

function Option({ id, name, value, isChecked, children }) {
  const optionId = `${id}_${name}_${value}`

  return (
    <CardOption>
      <input
        type="radio"
        name={`${id}_${name}`}
        value={value}
        defaultChecked={isChecked}
        id={optionId}
      />
      <label htmlFor={optionId}>{children}</label>
    </CardOption>
  )
}

export function Card(item) {
  const [elementId, setElementId] = useState(
    `${item._id}_${item.types[0]}_${item.sizes[0]}`
  )
  const countInCart = useSelector((state) => state.cart.list[elementId])
  const dispatch = useDispatch()

  const changeHandler = (event) => {
    const formData = new FormData(event.target.form)
    const newElementId = [...formData.values()].reduce(
      (acc, value) => `${acc}_${value}`,
      item._id
    )

    setElementId(newElementId)
  }

  return (
    <StyledCard>
      <CardImage src={item.imageUrl} />
      <Heading as="h3" $size="md" $mb="1.375rem">
        {item.title}
      </Heading>
      <CardOptions onChange={changeHandler}>
        <CardOptionsGroup data-group="dough">
          {item.types.map((type, i) => (
            <Option
              key={item._id + type}
              id={item._id}
              name="type"
              value={type}
              isChecked={i === 0}
            >
              {["thin", "traditional"][type]}
            </Option>
          ))}
        </CardOptionsGroup>
        <CardOptionsGroup data-group="size">
          {item.sizes.map((size, i) => (
            <Option
              key={i}
              id={item._id}
              name="size"
              value={size}
              isChecked={i === 0}
            >
              {size} cm.
            </Option>
          ))}
        </CardOptionsGroup>
      </CardOptions>
      <CardDetails>
        <Heading $size="1.375rem">from {item.price}$</Heading>
        <Button
          $type={countInCart ? "secondary" : "primary"}
          onClick={() => dispatch(addToCart(elementId))}
        >
          Add
          {countInCart > 1 && <span>{countInCart}</span>}
        </Button>
      </CardDetails>
    </StyledCard>
  )
}

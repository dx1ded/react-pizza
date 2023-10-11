import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@redux/cart/actions"
import { Heading, Button } from "@ui"
import { types } from "../../utils"
import {
  CardDetails,
  CardImage,
  StyledCardOption,
  CardOptions,
  CardOptionsGroup,
  StyledCard,
} from "./Card.styled"

function CardOption({ id, name, value, isChecked, children }) {
  const optionId = `${id}_${name}_${value}`

  return (
    <StyledCardOption>
      <input
        type="radio"
        id={optionId}
        name={`${id}_${name}`}
        defaultChecked={isChecked}
        value={value}
      />
      <label htmlFor={optionId}>{children}</label>
    </StyledCardOption>
  )
}

export function Card(item) {
  const dispatch = useDispatch()
  const [id, setId] = useState(`${item._id}_${item.types[0]}_${item.sizes[0]}`)
  const count = useSelector((state) => state.cart.list[id])

  const changeHandler = (event) => {
    const formData = new FormData(event.target.form)
    const newId = [...formData.values()].reduce(
      (acc, value) => `${acc}_${value}`,
      item._id
    )

    setId(newId)
  }

  return (
    <StyledCard>
      <CardImage src={item.imageUrl} alt="Pizza" />
      <Heading as="h3" $size="md" $mb="1.375rem">
        {item.title}
      </Heading>
      <CardOptions onChange={changeHandler}>
        <CardOptionsGroup>
          {item.types.map((type, i) => (
            <CardOption
              key={i}
              id={item._id}
              name="type"
              value={type}
              isChecked={i === 0}
            >
              {types[type]}
            </CardOption>
          ))}
        </CardOptionsGroup>
        <CardOptionsGroup>
          {item.sizes.map((size, i) => (
            <CardOption
              key={i}
              id={item._id}
              name="size"
              value={size}
              isChecked={i === 0}
            >
              {size} cm.
            </CardOption>
          ))}
        </CardOptionsGroup>
      </CardOptions>
      <CardDetails>
        <Heading $size="1.375rem">from {item.price}$</Heading>
        <Button
          $type={count ? "secondary" : "primary"}
          onClick={() => dispatch(addToCart(id))}
        >
          Add
          {count > 1 && <span>{count}</span>}
        </Button>
      </CardDetails>
    </StyledCard>
  )
}

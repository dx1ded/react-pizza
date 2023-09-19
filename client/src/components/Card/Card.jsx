import { Heading, Button } from "@ui"
import {
  CardDetails,
  CardImage,
  CardOption,
  CardOptions,
  CardOptionsGroup,
  StyledCard,
} from "./Card.styled"

function Option({ id, children, name, isChecked }) {
  return (
    <CardOption>
      <input
        type="radio"
        name={id + name}
        defaultChecked={isChecked}
        id={id + children}
      />
      <label htmlFor={id + children}>{children}</label>
    </CardOption>
  )
}

const types = ["thin", "traditional"]

export function Card(props) {
  return (
    <StyledCard>
      <CardImage src={props.imageUrl} />
      <Heading as="h3" $size="md" $mb="1.375rem">
        {props.title}
      </Heading>
      <CardOptions>
        <CardOptionsGroup data-group="dough">
          {props.types.map((type, i) => (
            <Option
              key={props._id + type}
              id={props._id}
              name="option-dough"
              isChecked={i === 0}
            >
              {types[type]}
            </Option>
          ))}
        </CardOptionsGroup>
        <CardOptionsGroup data-group="size">
          {props.sizes.map((size, i) => (
            <Option
              key={i}
              id={props._id}
              name="option-size"
              isChecked={i === 0}
            >
              {size} cm.
            </Option>
          ))}
        </CardOptionsGroup>
      </CardOptions>
      <CardDetails>
        <Heading $size="1.375rem">from {props.price}$</Heading>
        <Button $type="primary">Add</Button>
      </CardDetails>
    </StyledCard>
  )
}

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

export function Card(props) {
  return (
    <StyledCard>
      <CardImage src={props.imageUrl} />
      <Heading as="h3" $size="md" $mb="1.375rem">
        {props.title}
      </Heading>
      <CardOptions>
        <CardOptionsGroup data-group="dough">
          {props.types.includes(0) && (
            <Option id={props._id} name="option-dough" isChecked>
              thin
            </Option>
          )}
          {props.types.includes(1) && (
            <Option id={props._id} name="option-dough">
              traditional
            </Option>
          )}
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

import {
  CardDetails,
  CardImage,
  CardOption,
  CardOptions,
  CardOptionsGroup,
  StyledCard,
} from "@components/Card/Card.styled"
import { Title } from "@components/Title/Title.styled"
import { Button } from "@components/Button/Button.styled"

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

export function Card({ index }) {
  return (
    <StyledCard>
      <CardImage src="/pizza-img.png" />
      <Title as="h3" $size="md">
        Cheeseburger Pizza
      </Title>
      <CardOptions>
        <CardOptionsGroup data-group="dough">
          <Option id={index} name="option-dough" isChecked>
            thin
          </Option>
          <Option id={index} name="option-dough">
            traditional
          </Option>
        </CardOptionsGroup>
        <CardOptionsGroup data-group="size">
          <Option id={index} name="option-size">
            26 cm.
          </Option>
          <Option id={index} name="option-size" isChecked>
            30 cm.
          </Option>
          <Option id={index} name="option-size">
            40 cm.
          </Option>
        </CardOptionsGroup>
      </CardOptions>
      <CardDetails>
        <Title $size="1.375rem">from 20$</Title>
        <Button $type="primary">Add</Button>
      </CardDetails>
    </StyledCard>
  )
}

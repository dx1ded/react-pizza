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

function Option({ $type, value, name }) {
  return (
    <CardOption>
      <input type="radio" name={name} />
      <Button $type={$type}>{value}</Button>
    </CardOption>
  )
}

export function Card() {
  return (
    <StyledCard>
      <CardImage src="/pizza-img.png" />
      <Title as="h3" $size="md">
        Cheeseburger Pizza
      </Title>
      <CardOptions>
        <CardOptionsGroup data-group="dough">
          <Option $type="light" value="thin" name="option-dough" />
          <Option $type="gray" value="traditional" name="option-dough" />
        </CardOptionsGroup>
        <CardOptionsGroup data-group="size">
          <Option $type="light" value="26 cm." name="option-size" />
          <Option $type="gray" value="30 cm." name="option-size" />
          <Option $type="gray" value="40 cm." name="option-size" />
        </CardOptionsGroup>
      </CardOptions>
      <CardDetails>
        <Title $size="1.375rem">from 20$</Title>
        <Button $type="primary">Add</Button>
      </CardDetails>
    </StyledCard>
  )
}

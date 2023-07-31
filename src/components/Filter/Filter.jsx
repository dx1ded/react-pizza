import {
  StyledFilter,
  FilterOptions,
  StyledOption,
} from "@components/Filter/Filter.styled"
import { Container } from "@components/Container/Container.styled"
import { Button } from "@components/Button/Button.styled"
import { Sort } from "@components/Sort/Sort"

function Option({ isChecked, children }) {
  return (
    <StyledOption>
      <input
        type="radio"
        defaultChecked={isChecked}
        name="filter-options"
        id={`filter-options${children}`}
      />
      <label htmlFor={`filter-options${children}`}>{children}</label>
    </StyledOption>
  )
}

export function Filter() {
  return (
    <StyledFilter>
      <Container>
        <FilterOptions>
          <Option isChecked>All</Option>
          <Option>Meat</Option>
          <Option>Vegetarian</Option>
          <Option>Grill</Option>
          <Option>Spicy</Option>
          <Option>Closed</Option>
        </FilterOptions>
        <Sort />
      </Container>
    </StyledFilter>
  )
}

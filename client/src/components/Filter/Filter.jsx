import { Sort } from "@components/Sort/Sort"
import { Container } from "@ui"
import { StyledFilter, FilterOptions, StyledOption } from "./Filter.styled"

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

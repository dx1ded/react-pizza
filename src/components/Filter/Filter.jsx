import { StyledFilter, FilterOptions } from "@components/Filter/Filter.styled"
import { Container } from "@components/Container/Container.styled"
import { Button } from "@components/Button/Button.styled"
import { Sort } from "@components/Sort/Sort"

export function Filter() {
  return (
    <StyledFilter>
      <Container>
        <FilterOptions>
          <Button $type="dark">All</Button>
          <Button $type="gray">Meat</Button>
          <Button $type="gray">Vegetarian</Button>
          <Button $type="gray">Grill</Button>
          <Button $type="gray">Spicy</Button>
          <Button $type="gray">Closed</Button>
        </FilterOptions>
        <Sort />
      </Container>
    </StyledFilter>
  )
}

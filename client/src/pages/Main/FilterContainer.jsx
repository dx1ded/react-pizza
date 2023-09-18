import styled from "styled-components"
import { Container } from "@ui"
import { Filter } from "@components/Filter/Filter"
import { Sort } from "@components/Sort/Sort"

const StyledFilterContainer = styled.div`
  margin: 2.5rem 0 3.5rem;

  ${Container} {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    justify-content: space-between;
  }
`

export function FilterContainer() {
  return (
    <StyledFilterContainer>
      <Container>
        <Filter />
        <Sort />
      </Container>
    </StyledFilterContainer>
  )
}

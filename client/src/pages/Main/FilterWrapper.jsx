import styled from "styled-components"
import { Container } from "@ui"
import { Filter } from "@components/Filter/Filter"
import { Sort } from "@components/Sort/Sort"

const StyledFilterWrapper = styled.div`
  margin: 2.5rem 0 3.5rem;

  ${Container} {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    justify-content: space-between;
  }
`

export function FilterWrapper() {
  return (
    <StyledFilterWrapper>
      <Container>
        <Filter />
        <Sort />
      </Container>
    </StyledFilterWrapper>
  )
}

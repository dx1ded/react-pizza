import styled from "styled-components"
import { Container } from "@ui"
import { Filter } from "@components/Filter/Filter"
import { Sort } from "@components/Sort/Sort"
import breakpoints from "@breakpoints"
import { FilterOptions } from "@components/Filter/Filter.styled"

const StyledFilterWrapper = styled.div`
  margin: 2.5rem 0 3.5rem;

  ${Container} {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    justify-content: space-between;

    @media ${breakpoints.device.lg} {
      flex-direction: column;
      align-items: flex-start;

      ${FilterOptions} {
        order: 2;
      }
    }
  }

  @media ${breakpoints.device.xl} {
    margin: 1.5rem 0 2.5rem;
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

import styled from "styled-components"
import { useSelector } from "react-redux"
import { Container } from "@ui"
import { Pagination } from "@components/Pagination/Pagination"

const StyledPaginationContainer = styled.div`
  ${Container} {
    display: flex;
    justify-content: center;
  }
`

export function PaginationContainer() {
  const totalCount = useSelector((state) => state.products.totalCount)

  return (
    <StyledPaginationContainer>
      <Container>
        <Pagination count={totalCount} elementsPerPage={4} />
      </Container>
    </StyledPaginationContainer>
  )
}

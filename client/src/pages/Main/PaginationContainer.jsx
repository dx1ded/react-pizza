import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { Container } from "@ui"
import { Pagination } from "@components/Pagination/Pagination"

const StyledPaginationContainer = styled.div`
  ${Container} {
    display: flex;
    justify-content: center;
  }
`

export function PaginationContainer() {
  const [searchParams, setSearchParams] = useSearchParams()
  const totalCount = useSelector((state) => state.products.totalCount)

  const currentPage = +searchParams.get("page") || 1
  const changePage = (page) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page,
    })
  }

  return (
    <StyledPaginationContainer>
      <Container>
        <Pagination
          currentPage={currentPage}
          totalElements={totalCount}
          elementsPerPage={4}
          onChange={changePage}
        />
      </Container>
    </StyledPaginationContainer>
  )
}

import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { Container } from "@ui"
import { Pagination } from "@components/Pagination/Pagination"

const StyledPaginationWrapper = styled.div`
  ${Container} {
    display: flex;
    justify-content: center;
  }
`

export function PaginationWrapper() {
  const [searchParams, setSearchParams] = useSearchParams()
  const count = useSelector((state) => state.products.count)

  const currentPage = +searchParams.get("page") || 1
  const changePage = (page) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page,
    })
  }

  return (
    <StyledPaginationWrapper>
      <Container>
        <Pagination
          currentPage={currentPage}
          totalElements={count}
          elementsPerPage={4}
          onChange={changePage}
        />
      </Container>
    </StyledPaginationWrapper>
  )
}

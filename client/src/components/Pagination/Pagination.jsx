import { useSearchParams } from "react-router-dom"
import { Icon } from "@ui"
import { PaginationButton, StyledPagination } from "./Pagination.styled"

export function Pagination({ count, elementsPerPage }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = +searchParams.get("page") || 1
  const pagesCount = Math.ceil(count / elementsPerPage)

  const changePage = (page) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page,
    })
  }

  return (
    <StyledPagination>
      <PaginationButton
        disabled={currentPage <= 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <Icon $size="1rem">arrow_back</Icon>
      </PaginationButton>
      {Array(pagesCount)
        .fill("")
        .map((_, i) => {
          const page = i + 1

          return (
            <PaginationButton
              key={i}
              className={currentPage === page ? "active" : ""}
              onClick={() => changePage(page)}
            >
              {page}
            </PaginationButton>
          )
        })}
      <PaginationButton
        disabled={currentPage >= pagesCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <Icon $size="1rem">arrow_forward</Icon>
      </PaginationButton>
    </StyledPagination>
  )
}

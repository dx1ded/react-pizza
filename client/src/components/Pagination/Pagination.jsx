import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { Icon } from "@ui"
import { paginate } from "./paginate"
import { PaginationButton, StyledPagination } from "./Pagination.styled"

const ELEMENTS_PER_PAGE = 4

export function Pagination({ elementsTotal }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = +searchParams.get("page") || 1
  const pagesTotal = Math.ceil(elementsTotal / ELEMENTS_PER_PAGE)

  const changePage = (page) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page,
    })
  }

  const pagination = useMemo(
    () =>
      paginate({
        current: currentPage,
        pagesTotal,
      }),
    [currentPage, pagesTotal]
  )

  return (
    <StyledPagination>
      <PaginationButton
        disabled={!pagination.prev || !pagination.items.length}
        onClick={() => changePage(currentPage - 1)}
      >
        <Icon $size="1rem">arrow_back</Icon>
      </PaginationButton>
      {pagination.items.map((page) => (
        <PaginationButton
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => changePage(page)}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        disabled={!pagination.next || !pagination.items.length}
        onClick={() => changePage(currentPage + 1)}
      >
        <Icon $size="1rem">arrow_forward</Icon>
      </PaginationButton>
    </StyledPagination>
  )
}

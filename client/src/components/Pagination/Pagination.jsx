import { useMemo } from "react"
import { Icon } from "@ui"
import { PaginationButton, StyledPagination } from "./Pagination.styled"
import { paginate } from "./paginate"

export function Pagination({
  currentPage,
  totalElements,
  elementsPerPage,
  onChange,
}) {
  const pagination = useMemo(
    () =>
      paginate({
        currentPage,
        pagesTotal: Math.ceil(totalElements / elementsPerPage),
      }),
    [currentPage, totalElements, elementsPerPage]
  )

  return (
    <StyledPagination>
      <PaginationButton
        disabled={!pagination.prev || !pagination.items.length}
        onClick={() => onChange(currentPage - 1)}
      >
        <Icon $size="1rem">arrow_back</Icon>
      </PaginationButton>
      {pagination.items.map((page) => (
        <PaginationButton
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => onChange(page)}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        disabled={!pagination.next || !pagination.items.length}
        onClick={() => onChange(currentPage + 1)}
      >
        <Icon $size="1rem">arrow_forward</Icon>
      </PaginationButton>
    </StyledPagination>
  )
}

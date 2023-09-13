import { Icon } from "@ui"
import { StyledPagination } from "./Pagination.styled"

export function Pagination() {
  return (
    <StyledPagination>
      <ul>
        <li>
          <Icon $size="1rem">arrow_back</Icon>
        </li>
        <li data-active="">1</li>
        <li>2</li>
        <li>3</li>
        <li>
          <Icon $size="1rem">arrow_forward</Icon>
        </li>
      </ul>
    </StyledPagination>
  )
}

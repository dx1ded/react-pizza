import { Icon } from "@ui"
import {
  StyledSearch,
  SearchBar,
  SearchResult,
  SearchItem,
} from "./Search.styled"

export function Search() {
  return (
    <StyledSearch>
      <SearchBar>
        <Icon
          as="label"
          $color="var(--gray)"
          $size="1.6rem"
          htmlFor="search-input"
        >
          search
        </Icon>
        <input type="text" placeholder="Search pizza..." id="search-input" />
      </SearchBar>
      <SearchResult>
        <SearchItem>Mozarella</SearchItem>
        <SearchItem>CheeseBurger Pizza</SearchItem>
        <SearchItem>3 types of cheese</SearchItem>
      </SearchResult>
    </StyledSearch>
  )
}

import { useSearchParams } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"
import { Icon } from "@ui"
import { StyledSearch, SearchBar } from "./Search.styled"

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const changeHandler = useDebouncedCallback((event) => {
    setSearchParams({
      search: event.target.value,
    })
  }, 1000)

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
        <input
          type="text"
          placeholder="Search pizza..."
          id="search-input"
          defaultValue={searchParams.get("search")}
          onChange={changeHandler}
        />
      </SearchBar>
    </StyledSearch>
  )
}

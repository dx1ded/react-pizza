import { useSearchParams } from "react-router-dom"
import { Text } from "@ui"
import { useSelect } from "../Select/useSelect"
import { StyledSort, Triangle } from "./Sort.styled"

const types = {
  rating: "popularity",
  price_increasing: "price increasing",
  price_decreasing: "price decreasing",
}

const list = Object.values(types)

const findTypeIndex = (searchParams) =>
  list.findIndex((option) => option === types[searchParams.get("sortBy")])

export function Sort() {
  const [searchParams, setSearchParams] = useSearchParams()
  const select = useSelect({
    list,
    activeIndex:
      findTypeIndex(searchParams) === -1 ? 0 : findTypeIndex(searchParams),
    onChange(option) {
      const type = Object.keys(types)[list.findIndex((item) => item === option)]

      searchParams.delete("search")

      setSearchParams({
        ...Object.fromEntries(searchParams),
        sortBy: type,
        page: 1,
      })
    },
  })

  return (
    <StyledSort>
      <Triangle $isRotated={select.isOpened} />
      <Text $size="sm" $color="var(--dark)">
        Sort by:
      </Text>
      <Text
        as="button"
        $size="sm"
        $color="var(--primary)"
        onClick={select.toggle}
      >
        {select.active}
      </Text>
      {select.contextHandler}
    </StyledSort>
  )
}

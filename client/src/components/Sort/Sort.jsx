import { useSearchParams } from "react-router-dom"
import { Text } from "@ui"
import { useSelect } from "../Select/useSelect"
import { StyledSort, Triangle } from "./Sort.styled"

const sort = {
  rating: "popularity",
  price_increasing: "price increasing",
  price_decreasing: "price decreasing",
}

const list = Object.values(sort)

const findOptionIndex = (queryOption) =>
  list.findIndex((option) => option === (sort[queryOption] || queryOption))

export function Sort() {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBy = searchParams.get("sortBy")
  const select = useSelect({
    list,
    activeIndex: findOptionIndex(sortBy) === -1 ? 0 : findOptionIndex(sortBy),
    onChange(option) {
      const serializedOption = Object.keys(sort)[findOptionIndex(option)]

      searchParams.delete("search")

      setSearchParams({
        ...Object.fromEntries(searchParams),
        sortBy: serializedOption,
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

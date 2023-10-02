import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Text } from "@ui"
import {
  StyledOption,
  Triangle,
  StyledSort,
  SortWrapper,
  SortOptions,
} from "./Sort.styled"

function Option({ isChecked, children }) {
  return (
    <StyledOption>
      <input
        type="radio"
        defaultChecked={isChecked}
        name="sort-options"
        id={`sort-options${children}`}
        data-value={children}
      />
      <label htmlFor={`sort-options${children}`}>{children}</label>
    </StyledOption>
  )
}

export function Sort() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isOpened, setIsOpened] = useState(false)
  const [options] = useState([
    {
      name: "popularity",
      type: "rating",
    },
    {
      name: "price increasing",
      type: "price_increasing",
    },
    {
      name: "price decreasing",
      type: "price_decreasing",
    },
  ])

  const changeHandler = (event) => {
    const { value } = event.target.dataset
    const option = options.find((el) => el.name === value)

    searchParams.delete("search")

    setSearchParams({
      ...Object.fromEntries(searchParams),
      sortBy: option.type,
      page: 1,
    })

    setIsOpened(false)
  }

  const sortBy = searchParams.get("sortBy")
  const activeOption =
    options.find((option) => option.type === sortBy) || options[0]

  return (
    <StyledSort className={isOpened ? "opened" : ""}>
      <Triangle />
      <Text $size="sm" $color="var(--dark)">
        Sort by:
      </Text>
      <SortWrapper>
        <Text
          as="button"
          $size="sm"
          $color="var(--primary)"
          onClick={() => setIsOpened(!isOpened)}
        >
          {activeOption.name}
        </Text>
        <SortOptions onChange={changeHandler}>
          {options.map((option, i) => (
            <Option
              key={i}
              isChecked={sortBy ? option.type === sortBy : i === 0}
            >
              {option.name}
            </Option>
          ))}
        </SortOptions>
      </SortWrapper>
    </StyledSort>
  )
}

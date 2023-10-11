import { useSearchParams } from "react-router-dom"
import { FilterOptions, StyledFilterOption } from "./Filter.styled"

function FilterOption({ value, isChecked, onClick }) {
  return (
    <StyledFilterOption>
      <input
        type="radio"
        name="filter-options"
        id={`filter-option-${value}`}
        readOnly
        checked={isChecked}
        defaultValue={value}
        onClick={() => onClick(value)}
      />
      <label htmlFor={`filter-option-${value}`}>{value}</label>
    </StyledFilterOption>
  )
}

const options = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"]

export function Filter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const clickHandler = (option) => {
    searchParams.delete("search")

    setSearchParams({
      ...Object.fromEntries(searchParams),
      filterBy: option,
      page: 1,
    })
  }

  const filterBy = searchParams.get("filterBy")

  return (
    <FilterOptions>
      {options.map((option, i) => (
        <FilterOption
          key={i}
          value={option}
          isChecked={filterBy ? option === filterBy : i === 0}
          onClick={clickHandler}
        />
      ))}
    </FilterOptions>
  )
}

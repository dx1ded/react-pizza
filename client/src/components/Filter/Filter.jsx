import { useSearchParams } from "react-router-dom"
import { FilterOptions, StyledOption } from "./Filter.styled"

function Option({ value, isChecked, onClick }) {
  return (
    <StyledOption>
      <input
        type="radio"
        defaultChecked={isChecked}
        name="filter-options"
        id={`filter-option-${value}`}
        value={value}
        onClick={() => onClick(value)}
      />
      <label htmlFor={`filter-option-${value}`}>{value}</label>
    </StyledOption>
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
        <Option
          key={i}
          value={option}
          isChecked={filterBy ? option === filterBy : i === 0}
          onClick={clickHandler}
        />
      ))}
    </FilterOptions>
  )
}

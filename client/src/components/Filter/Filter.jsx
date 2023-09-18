import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { FilterOptions, StyledOption } from "./Filter.styled"

function Option({ isChecked, children }) {
  return (
    <StyledOption>
      <input
        type="radio"
        defaultChecked={isChecked}
        name="filter-options"
        id={`filter-options${children}`}
        data-value={children}
      />
      <label htmlFor={`filter-options${children}`}>{children}</label>
    </StyledOption>
  )
}

export function Filter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [options, setOptions] = useState([
    "All",
    "Meat",
    "Vegetarian",
    "Grill",
    "Spicy",
    "Closed",
  ])

  const changeHandler = (event) => {
    const filterType = event.target.dataset.value

    setSearchParams({
      ...Object.fromEntries(searchParams),
      filterBy: filterType,
    })
  }

  const filterBy = searchParams.get("filterBy")

  return (
    <FilterOptions onChange={changeHandler}>
      {options.map((option, i) => (
        <Option key={i} isChecked={filterBy ? option === filterBy : i === 0}>
          {option}
        </Option>
      ))}
    </FilterOptions>
  )
}

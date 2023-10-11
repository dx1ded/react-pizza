import { useId } from "react"
import { useGlobalClick } from "@hooks/useGlobalClick"
import { StyledSelectOption, StyledSelect } from "./Select.styled"

function SelectOption({ name, index, isChecked, value, onClick }) {
  return (
    <StyledSelectOption>
      <input
        type="radio"
        name={name}
        id={`${name}-${index}`}
        readOnly
        checked={isChecked}
        defaultValue={value}
        onClick={onClick}
      />
      <label htmlFor={`${name}-${index}`}>{value}</label>
    </StyledSelectOption>
  )
}

export function Select({
  isOpened,
  list,
  active,
  toggle,
  setActive,
  onChange,
}) {
  const name = useId()

  useGlobalClick(toggle, isOpened)

  const clickHandler = (event) => {
    const option = event.target.value

    setActive(option)
    onChange(option)
  }

  return (
    <StyledSelect $isOpened={isOpened}>
      {list.map((option, i) => (
        <SelectOption
          key={i}
          index={i}
          name={name}
          isChecked={active === option}
          value={option}
          onClick={clickHandler}
        />
      ))}
    </StyledSelect>
  )
}

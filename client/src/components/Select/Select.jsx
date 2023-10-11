import { useEffect, useRef, useId } from "react"
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
  const selectRef = useRef(null)

  const clickHandler = (event) => {
    const option = event.target.value

    setActive(option)
    onChange(option)
    toggle()
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!selectRef.current.contains(event.target) && isOpened) {
        toggle()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [toggle, isOpened])

  return (
    <StyledSelect $isOpened={isOpened} ref={selectRef}>
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

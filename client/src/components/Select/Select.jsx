import { useEffect, useRef, useId } from "react"
import { Option, StyledSelect } from "./Select.styled"

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
        <Option key={i}>
          <input
            type="radio"
            name={name}
            id={`${name}-${i}`}
            defaultChecked={active === option}
            value={option}
            onClick={clickHandler}
          />
          <label htmlFor={`${name}-${i}`}>{option}</label>
        </Option>
      ))}
    </StyledSelect>
  )
}

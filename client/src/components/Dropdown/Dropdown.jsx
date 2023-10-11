import { useRef } from "react"
import { useOutsideClick } from "@hooks/useOutsideClick"
import { StyledDropdown } from "./Dropdown.styled"

export function Dropdown({ isOpened, api, children }) {
  const dropdownRef = useRef(null)

  useOutsideClick(dropdownRef, isOpened, api.close)

  return (
    <StyledDropdown ref={dropdownRef} $isOpened={isOpened} onClick={api.close}>
      {children}
    </StyledDropdown>
  )
}

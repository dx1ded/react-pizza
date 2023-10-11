import { useGlobalClick } from "@hooks/useGlobalClick"
import { StyledDropdown } from "./Dropdown.styled"

export function Dropdown({ isOpened, api, children }) {
  useGlobalClick(api.close, isOpened)

  return <StyledDropdown $isOpened={isOpened}>{children}</StyledDropdown>
}

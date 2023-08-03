import { NavLink } from "react-router-dom"
import { Icon } from "@components/Icon/Icon.styled"
import { StyledAccountButton } from "@components/Header/AccountButton.styled"

export function AccountButton() {
  return (
    <StyledAccountButton as={NavLink} $type="primary" to="/account">
      <Icon $name="person" />
    </StyledAccountButton>
  )
}

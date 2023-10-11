import { NavLink } from "react-router-dom"
import { Icon } from "@ui"
import { CartButton } from "./CartButton"
import { StyledNav } from "./Nav.styled"

export function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <CartButton />
        </li>
        <li>
          <NavLink to="/profile">
            <Icon $size="1.5rem">person</Icon>
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  )
}

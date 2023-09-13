import { Icon } from "@ui"
import { NavLink } from "react-router-dom"
import { StyledNav } from "./Nav.styled"
import { CartButton } from "./CartButton"

export function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <CartButton />
        </li>
        <li>
          <NavLink to="/profile">
            <Icon $size="1.5rem" $color="var(--dark)">
              person
            </Icon>
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  )
}

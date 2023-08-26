import { Icon } from "@ui"
import { NavLink } from "react-router-dom"
import { StyledNav, NewMessages } from "./Nav.styled"
import { CartButton } from "./CartButton"

export function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/chat">
            <Icon $size="1.3rem" $color="var(--dark)">
              chat_bubble
            </Icon>
            <NewMessages>2</NewMessages>
          </NavLink>
        </li>
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

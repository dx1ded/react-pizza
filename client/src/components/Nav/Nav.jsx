import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeSecret } from "@redux/secret/actions"
import { Icon } from "@ui"
import { useDropdown } from "../Dropdown/useDropdown"
import { CartButton } from "./CartButton"
import { StyledNav } from "./Nav.styled"

export function Nav() {
  const dispatch = useDispatch()

  const quit = () => {
    localStorage.removeItem("secret")
    dispatch(removeSecret())
  }

  const [api, contextHolder] = useDropdown({
    children: (
      <>
        <NavLink to="/profile">Profile</NavLink>
        <button type="button" style={{ color: "red" }} onClick={quit}>
          Quit
        </button>
      </>
    ),
  })

  return (
    <StyledNav>
      {contextHolder}
      <ul>
        <li>
          <CartButton />
        </li>
        <li>
          <button type="button" onClick={api.open}>
            <Icon $size="1.5rem">person</Icon>
          </button>
        </li>
      </ul>
    </StyledNav>
  )
}

import { useDispatch, useSelector } from "react-redux"
import { closeBurger, openBurger } from "@redux/burger/actions"
import { Logo } from "../Logo/Logo"
import { Search } from "../Search/Search"
import { BurgerClose, StyledBurger, StyledBurgerButton } from "./Burger.styled"

export function Burger() {
  const dispatch = useDispatch()
  const { isOpened } = useSelector((state) => state.burger)

  return (
    <StyledBurger $isOpened={isOpened}>
      <BurgerClose
        aria-label="Close the menu"
        onClick={() => dispatch(closeBurger())}
      >
        <span />
        <span />
      </BurgerClose>
      <Logo />
      <Search />
    </StyledBurger>
  )
}

export function BurgerButton() {
  const dispatch = useDispatch()

  return (
    <StyledBurgerButton
      aria-label="Open menu"
      onClick={() => dispatch(openBurger())}
    >
      <span />
      <span />
      <span />
    </StyledBurgerButton>
  )
}

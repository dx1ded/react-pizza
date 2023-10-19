import { Container } from "@ui"
import { Logo } from "@components/Logo/Logo"
import { Search } from "@components/Search/Search"
import { Nav } from "@components/Nav/Nav"
import { StyledHeader, DivisionLine, HeaderWrapper } from "./Header.styled"
import { Burger, BurgerButton } from "../Burger/Burger"

export function Header({ hasSearch }) {
  return (
    <StyledHeader $hasSearch={hasSearch}>
      {hasSearch && <Burger />}
      <Container>
        <HeaderWrapper>
          <Logo />
          {hasSearch && <BurgerButton />}
        </HeaderWrapper>
        {hasSearch && <Search />}
        <Nav />
      </Container>
      <DivisionLine />
    </StyledHeader>
  )
}

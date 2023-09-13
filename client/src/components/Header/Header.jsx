import { Container } from "@ui"
import { Logo } from "@components/Logo/Logo"
import { Search } from "@components/Search/Search"
import { Nav } from "@components/Nav/Nav"
import { StyledHeader, DivisionLine } from "./Header.styled"

export function Header({ hasSearch }) {
  return (
    <StyledHeader $hasSearch={hasSearch}>
      <Container>
        <div>
          <Logo />
        </div>
        {hasSearch && <Search />}
        <Nav />
      </Container>
      <DivisionLine />
    </StyledHeader>
  )
}

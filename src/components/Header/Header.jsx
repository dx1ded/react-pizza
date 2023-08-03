import {
  StyledHeader,
  DivisionLine,
  HeaderLinks,
} from "@components/Header/Header.styled"
import { Container } from "@components/Container/Container.styled"
import { Logo } from "@components/Logo/Logo"
import { Search } from "@components/Search/Search"
import { CartButton } from "./CartButton"
import { AccountButton } from "./AccountButton"

export function Header({ hasSearch }) {
  return (
    <>
      <StyledHeader>
        <Container>
          <Logo />
          {hasSearch && <Search />}
          <HeaderLinks>
            <CartButton />
            <AccountButton />
          </HeaderLinks>
        </Container>
      </StyledHeader>
      <DivisionLine />
    </>
  )
}

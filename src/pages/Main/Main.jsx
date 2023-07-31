import { Wrapper } from "@components/Wrapper/Wrapper.styled"
import { Header } from "@components/Header/Header"
import { Sections } from "@components/Sections/Sections.styled"
import { Filter } from "@components/Filter/Filter"
import { Pizza } from "./Pizza"

export function Main() {
  return (
    <Wrapper>
      <Header />
      <Sections>
        <Filter />
        <Pizza />
      </Sections>
    </Wrapper>
  )
}

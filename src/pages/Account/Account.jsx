import { Wrapper } from "@components/Wrapper/Wrapper.styled"
import { Header } from "@components/Header/Header"
import { Sections } from "@components/Sections/Sections.styled"
import { AccountInfo } from "./AccountInfo"

export function Account() {
  return (
    <Wrapper>
      <Header />
      <Sections>
        <AccountInfo />
      </Sections>
    </Wrapper>
  )
}

import { Wrapper } from "@components/Wrapper/Wrapper.styled"
import { Header } from "@components/Header/Header"
import { Sections } from "@components/Sections/Sections.styled"
import { CartMenu } from "./CartMenu"

export function Cart() {
  return (
    <Wrapper>
      <Header />
      <Sections $mt="5.875rem">
        <CartMenu />
      </Sections>
    </Wrapper>
  )
}

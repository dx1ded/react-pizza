import { Wrapper } from "@components/Wrapper/Wrapper.styled"
import { Header } from "@components/Header/Header"
import { Sections } from "@components/Sections/Sections.styled"
import { CartMenu } from "./CartMenu"
import { CartEmpty } from "./CartEmpty"

export function Cart() {
  return (
    <Wrapper>
      <Header />
      <Sections $mt="5.875rem">
        {/* <CartMenu /> */}
        <CartEmpty />
      </Sections>
    </Wrapper>
  )
}

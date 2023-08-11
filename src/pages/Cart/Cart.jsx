import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { CartMenu } from "./CartMenu"
import { CartEmpty } from "./CartEmpty"

export function Cart() {
  return (
    <PageWrapper $pb="11rem">
      <Header />
      {/* <CartMenu /> */}
      <CartEmpty />
    </PageWrapper>
  )
}

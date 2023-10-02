import { useSelector } from "react-redux"
import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { CartMenu } from "./CartMenu"
import { CartEmpty } from "./CartEmpty"

export function Cart() {
  const cartList = useSelector((state) => state.cart.list)

  return (
    <PageWrapper $pb="11rem">
      <Header />
      {Object.keys(cartList).length ? <CartMenu /> : <CartEmpty />}
    </PageWrapper>
  )
}

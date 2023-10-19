import { useSelector } from "react-redux"
import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import styled from "styled-components"
import breakpoints from "@breakpoints"
import { CartMenu } from "./CartMenu"
import { CartEmpty } from "./CartEmpty"

const StyledCart = styled.div`
  ${PageWrapper} {
    @media ${breakpoints.device.xl} {
      padding-bottom: 8rem;
    }

    @media ${breakpoints.device.lg} {
      padding-bottom: 6rem;
    }

    @media ${breakpoints.device.md} {
      padding-bottom: 4rem;
    }
  }
`

export function Cart() {
  const cartList = useSelector((state) => state.cart.list)

  return (
    <StyledCart>
      <PageWrapper $pb="11rem">
        <Header />
        {Object.keys(cartList).length ? <CartMenu /> : <CartEmpty />}
      </PageWrapper>
    </StyledCart>
  )
}

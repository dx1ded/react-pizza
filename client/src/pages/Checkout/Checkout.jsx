import { useState } from "react"
import { Container, PageWrapper } from "@ui"
import { useSelector } from "react-redux"
import { Header } from "@components/Header/Header"
import { Strategy } from "@components/Strategy/Strategy"
import { Poster } from "./Poster"
import { PayMethod } from "./PayMethod"
import { Address } from "./Address"
import { Review } from "./Review"
import { CartEmpty } from "../Cart/CartEmpty"
import { StyledCheckout, CheckoutContent } from "./Checkout.styled"

export function Checkout() {
  const [isDone, setIsDone] = useState(false)
  const cartList = useSelector((state) => state.cart.list)

  return (
    <StyledCheckout>
      <PageWrapper $pb="11rem">
        <Header />
        {!Object.keys(cartList).length && !isDone ? (
          <CartEmpty />
        ) : (
          <CheckoutContent>
            <Container $mw="50rem">
              {isDone ? (
                <Poster
                  image="order-done-sketch.svg"
                  title="🎉 Thank you for ordering!"
                  buttonText="Go to main page"
                  to="/"
                />
              ) : (
                <Strategy hasProgress>
                  <PayMethod title="Pay Method" />
                  <Address title="Choose Address" />
                  <Review title="Review" setIsDone={setIsDone} />
                </Strategy>
              )}
            </Container>
          </CheckoutContent>
        )}
      </PageWrapper>
    </StyledCheckout>
  )
}

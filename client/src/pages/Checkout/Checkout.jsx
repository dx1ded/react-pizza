import { useState } from "react"
import { Navigate } from "react-router-dom"
import { Container, PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { Strategy } from "@components/Strategy/Strategy"
import { Poster } from "./Poster"
import { PayMethod } from "./PayMethod"
import { Address } from "./Address"
import { Review } from "./Review"
import { StyledCheckout } from "./Checkout.styled"

export function Checkout() {
  const [isDone, setIsDone] = useState(false)
  const cartList = JSON.parse(localStorage.getItem("cart"))

  if (!Object.keys(cartList).length) {
    return <Navigate to="/" />
  }

  return (
    <PageWrapper $pb="11rem">
      <Header />
      <StyledCheckout>
        <Container $mw="50rem">
          {isDone ? (
            <Poster
              image="order-done-sketch.svg"
              title="🎉 Thank you for ordering!"
              buttonText="Go to main page"
              to="/"
            />
          ) : (
            <Strategy>
              <PayMethod title="Pay Method" />
              <Address title="Choose Address" />
              <Review title="Review" setIsDone={setIsDone} />
            </Strategy>
          )}
        </Container>
      </StyledCheckout>
    </PageWrapper>
  )
}

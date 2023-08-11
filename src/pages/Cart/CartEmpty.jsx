import { Heading, Text, Button, Container } from "@ui"
import { NavLink } from "react-router-dom"
import { StyledCartEmpty } from "@/pages/Cart/CartEmpty.styled"

export function CartEmpty() {
  return (
    <StyledCartEmpty>
      <Container>
        <Heading $size="lg">Cart is empty 😕</Heading>
        <Text $size="1.125rem" $color="#777777" $weight="400">
          Most likely you have not ordered a pizza yet. <br />
          In order to purchase, go to the main page.
        </Text>
        <img
          src="/customer-with-trolley.svg"
          alt="Customer going with a trolley"
        />
        <Button as={NavLink} $type="dark" to="/">
          Go back
        </Button>
      </Container>
    </StyledCartEmpty>
  )
}

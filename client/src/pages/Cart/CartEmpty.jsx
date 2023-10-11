import { NavLink } from "react-router-dom"
import { Heading, Text, Button, Container } from "@ui"
import { StyledCartEmpty } from "./CartEmpty.styled"

export function CartEmpty() {
  return (
    <StyledCartEmpty>
      <Container>
        <Heading $size="lg" $mb="1rem">
          Cart is empty 😕
        </Heading>
        <Text $size="md" $color="var(--gray)" $weight="400">
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

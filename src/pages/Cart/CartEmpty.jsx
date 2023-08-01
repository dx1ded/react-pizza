import { Title } from "@components/Title/Title.styled"
import { Text } from "@components/Text/Text.styled"
import { Button } from "@components/Button/Button.styled"
import { NavLink } from "react-router-dom"
import { Container } from "@components/Container/Container.styled"
import { StyledCartEmpty } from "@/pages/Cart/CartEmpty.styled"

export function CartEmpty() {
  return (
    <StyledCartEmpty>
      <Container>
        <Title $size="lg">Cart is empty 😕</Title>
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

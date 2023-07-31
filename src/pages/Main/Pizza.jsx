import { Container } from "@components/Container/Container.styled"
import { Title } from "@components/Title/Title.styled"
import { Card } from "@components/Card/Card"
import { PizzasList, StyledPizza } from "@/pages/Main/Pizza.styled"

export function Pizza() {
  return (
    <StyledPizza>
      <Container>
        <Title as="h2" $size="lg">
          All pizzas
        </Title>
        <PizzasList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </PizzasList>
      </Container>
    </StyledPizza>
  )
}

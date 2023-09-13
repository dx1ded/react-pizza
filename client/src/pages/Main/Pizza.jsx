import { Container, Heading } from "@ui"
import { Card } from "@components/Card/Card"
import { PizzasList } from "./Pizza.styled"

export function Pizza() {
  return (
    <section>
      <Container>
        <Heading $size="lg" $mb="2.25rem">
          All pizzas
        </Heading>
        <PizzasList>
          {Array(8)
            .fill("")
            .map((_, index) => (
              <Card index={index} key={index} />
            ))}
        </PizzasList>
      </Container>
    </section>
  )
}

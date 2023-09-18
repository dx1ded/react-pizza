import styled from "styled-components"
import { useSelector } from "react-redux"
import { Container, Heading } from "@ui"
import { Card } from "@components/Card/Card"
import { ProductsSkeleton } from "./ProductsSkeleton"

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 2.25rem;
`

export function PizzaList() {
  const products = useSelector((state) => state.products)

  return (
    <section>
      <Container>
        <Heading $size="lg" $mb="2.25rem">
          All pizzas
        </Heading>
        <List>
          {products.isLoading ? (
            <ProductsSkeleton />
          ) : (
            products.filteredList.map((product) => (
              <Card key={product._id} {...product} />
            ))
          )}
        </List>
      </Container>
    </section>
  )
}

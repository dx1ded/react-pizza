import { useSelector } from "react-redux"
import styled from "styled-components"
import { Container, Heading } from "@ui"
import { Card } from "@components/Card/Card"
import { ProductSkeleton } from "./Product.skeleton"
import { NotFound } from "./NotFound"

const StyledPizzaList = styled.section`
  margin-bottom: 4rem;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 2.25rem;
`

export function PizzaList() {
  const { isLoading, list } = useSelector((state) => state.products)

  return (
    <StyledPizzaList>
      <Container>
        <Heading $size="lg" $mb="2.25rem">
          All pizzas
        </Heading>
        {!isLoading && !list.length ? (
          <NotFound />
        ) : (
          <List>
            {isLoading ? (
              <>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
              </>
            ) : (
              list.map((product) => <Card key={product._id} {...product} />)
            )}
          </List>
        )}
      </Container>
    </StyledPizzaList>
  )
}

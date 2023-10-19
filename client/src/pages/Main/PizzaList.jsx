import { useSelector } from "react-redux"
import styled from "styled-components"
import { Container, Heading } from "@ui"
import { Card } from "@components/Card/Card"
import breakpoints from "@breakpoints"
import { ProductSkeleton } from "./Product.skeleton"
import { NotFound } from "./NotFound"

const StyledPizzaList = styled.section`
  margin-bottom: 4rem;

  ${Container} > ${Heading} {
    @media ${breakpoints.device.xs} {
      margin-bottom: 1.5rem;
    }
  }

  @media ${breakpoints.device.lg} {
    margin-bottom: 3rem;
  }
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 2.25rem;

  @media (width <= 78.125em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${breakpoints.device.xl} {
    gap: 3rem 1.5rem;
  }

  @media ${breakpoints.device.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.device.md} {
    gap: 2.5rem 1rem;
  }

  @media (width <= 27.5em) {
    grid-template-columns: 1fr;
  }
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

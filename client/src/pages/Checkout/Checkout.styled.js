import styled from "styled-components"
import breakpoints from "@breakpoints"
import { PageWrapper } from "@ui"

export const StyledCheckout = styled.div`
  ${PageWrapper} {
    @media ${breakpoints.device.xl} {
      padding-bottom: 6rem;
    }

    @media ${breakpoints.device.lg} {
      padding-bottom: 4rem;
    }

    @media ${breakpoints.device.sm} {
      padding-bottom: 3rem;
    }
  }
`

export const CheckoutContent = styled.section`
  margin-top: 6rem;

  @media ${breakpoints.device.xl} {
    margin-top: 4rem;
  }

  @media ${breakpoints.device.lg} {
    margin-top: 3rem;
  }

  @media ${breakpoints.device.sm} {
    margin-top: 2rem;
  }
`

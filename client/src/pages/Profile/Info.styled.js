import styled from "styled-components"
import { Container, Text, Heading, Icon } from "@ui"
import breakpoints from "@breakpoints"

export const StyledInfo = styled.section`
  margin: 4rem 0 3rem;

  ${Container} {
    display: flex;
    gap: 3rem;
    padding-bottom: 3rem;
    border-bottom: 2px solid var(--light-gray);

    @media ${breakpoints.device.lg} {
      gap: 2rem;
      padding-bottom: 2rem;
    }

    @media ${breakpoints.device.md} {
      flex-direction: column;
      gap: 1rem;
    }
  }

  img {
    display: inline-block;
    flex-shrink: 0;
    max-width: 12.5rem;
    max-height: 12.5rem;
    border-radius: 100%;

    @media ${breakpoints.device.lg} {
      max-width: 10rem;
      max-height: 10rem;
    }
  }

  @media ${breakpoints.device.lg} {
    margin: 2rem 0;
  }
`

export const InfoWrapper = styled.div`
  width: 100%;
  min-width: 0;

  & > ${Heading} {
    @media ${breakpoints.device.lg} {
      font-size: 1.5rem;
    }
  }

  & > ${Text} {
    @media ${breakpoints.device.lg} {
      margin-bottom: 1.5rem;
    }
  }

  section {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    .swiper-slide {
      height: 5.75rem;
      padding: 1rem 0.5rem;
      cursor: pointer;
      background-color: var(--light-gray);
      border-radius: 10px;

      ${Icon} {
        position: absolute;
        top: 50%;
        left: 50%;
        font-weight: 700;
        color: var(--primary);
        transform: translate(-50%, -50%);
      }

      ${Text} {
        font-style: normal;
      }
    }
  }
`

export const InfoDate = styled(Text).attrs({
  $size: "sm",
  $color: "var(--gray)",
})`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`

export const SliderNav = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
`

const SliderNavButton = styled.button`
  display: inline-block;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--white);
  cursor: pointer;
  background-color: var(--primary);
  border: none;
  border-radius: 100%;

  ${Icon} {
    line-height: 1.5rem;
    vertical-align: middle;

    @media ${breakpoints.device.lg} {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }

  &.swiper-button-disabled {
    opacity: 0.6;
  }

  @media ${breakpoints.device.lg} {
    width: 1.25rem;
    height: 1.25rem;
  }
`

export const SliderNavPrev = styled(SliderNavButton).attrs({
  className: "slider-nav-prev",
})``

export const SliderNavNext = styled(SliderNavButton).attrs({
  className: "slider-nav-next",
})`
  ${Icon} {
    transform: rotate(180deg);
  }
`

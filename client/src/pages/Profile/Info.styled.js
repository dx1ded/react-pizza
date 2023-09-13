import styled from "styled-components"
import { Container, Text, Icon } from "@ui"

export const StyledInfo = styled.section`
  margin: 4rem 0 3rem;

  ${Container} {
    display: flex;
    gap: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--gray);
  }

  img {
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 100%;
    object-fit: cover;
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

export const InfoSection = styled.section`
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
  }

  &.swiper-button-disabled {
    opacity: 0.6;
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

import styled from "styled-components"
import { Container, Input } from "@ui"
import breakpoints from "@breakpoints"
import { StyledStrategy } from "@components/Strategy/Strategy.styled"

export const StyledAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: auto;

  ${Container} {
    width: 100%;
    padding: var(--container-v-offset) 2rem 2rem;
    background-color: var(--white);
    border-radius: 20px;

    @media ${breakpoints.device.xl} {
      padding: var(--container-v-offset) 1.5rem 1rem;
    }

    @media ${breakpoints.device.sm} {
      padding: var(--container-v-offset) 1rem 1rem;
    }
  }

  ${StyledStrategy} {
    min-height: 18rem;

    @media ${breakpoints.device.xl} {
      min-height: 14rem;
    }

    @media ${breakpoints.device.md} {
      min-height: 10rem;
    }
  }
`

export const ValidationResult = styled.p`
  position: absolute;
  top: 50%;
  right: -1rem;
  z-index: var(--z-validation-message);
  width: 100%;
  max-width: 14rem;
  padding: 0.7rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: red;
  visibility: ${(props) => (props.$hasError ? "visible" : "hidden")};
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: var(--shade-1);
  opacity: ${(props) => (props.$hasError ? 1 : 0)};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  transform: translate(100%, -50%);

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    content: "";
    border-color: transparent red transparent transparent;
    border-style: solid;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    transform: translate(-100%, -50%);

    @media ${breakpoints.device.lg} {
      top: 0;
      left: 0.5rem;
      border-color: transparent transparent red;
      border-width: 0 0.4rem 0.4rem;
      transform: translateY(-100%);
    }
  }

  @media ${breakpoints.device.xl} {
    max-width: 8rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.6rem;
  }

  @media ${breakpoints.device.lg} {
    right: initial;
    left: 0;
    max-width: 10rem;
    padding: 0.5rem;
    transform: translateY(100%);
  }

  @media ${breakpoints.device.sm} {
    padding: 0.35rem;
  }
`

export const InputWrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 1rem;

    @media ${breakpoints.device.xl} {
      margin-bottom: 0.875rem;
    }
  }

  ${Input} {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;

    @media ${breakpoints.device.xl} {
      font-size: 0.875rem;
    }

    @media ${breakpoints.device.sm} {
      font-size: 0.8rem;
    }

    @media ${breakpoints.device.xs} {
      padding: 0.3rem 0.7rem;
    }
  }
`

export const LabelledInput = styled.div`
  position: relative;

  label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 100%;
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--white);
    background-color: var(--primary);
    border-radius: 30px 0 0 30px;

    @media ${breakpoints.device.sm} {
      width: 2.5rem;
      font-size: 1.1rem;
    }
  }

  ${Input} {
    padding-left: 3.7rem;

    @media ${breakpoints.device.sm} {
      padding-left: 3.2rem;
    }
  }
`

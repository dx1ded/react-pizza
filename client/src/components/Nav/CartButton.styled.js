import styled from "styled-components"
import { Button, Text, Icon } from "@ui"
import { NavLink } from "react-router-dom"

export const CartIcon = styled.div`
  position: relative;
  display: flex;
  gap: 0.3rem;
  align-items: center;

  ${Text} {
    position: absolute;
    right: -6px;
    bottom: -1px;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background-color: red;
    border-radius: 100%;
  }
`

export const StyledCartButton = styled(Button).attrs({
  as: NavLink,
  $type: "primary",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.2rem;
  color: var(--dark);
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  border: none;
  transition:
    padding 0.3s ease-in-out,
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;

  & > ${Text} {
    position: absolute;
    top: -999999px;
    visibility: hidden;
    opacity: 0;
    transition:
      opacity 0.3s ease-in-out 0.3s,
      visibility 0.3s ease-in-out 0.3s;

    &::after {
      display: inline-block;
      width: 1px;
      height: 1.2rem;
      margin: 0 0.8rem;
      vertical-align: middle;
      content: "";
      background-color: var(--white);
    }
  }

  &:hover {
    padding: 1rem 1.25rem 1rem 1.375rem;
    color: var(--white);
    background-color: var(--primary);

    & > ${Text} {
      position: static;
      visibility: visible;
      opacity: 1;
    }

    ${CartIcon} {
      ${Icon} {
        font-size: 1rem;
      }

      ${Text} {
        position: static;
        width: auto;
        height: auto;
        font-size: 0.875rem;
        background-color: transparent;
      }
    }
  }
`

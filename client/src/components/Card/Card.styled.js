import styled from "styled-components"
import { Button } from "@ui"

export const StyledCard = styled.article`
  text-align: center;
`

export const CardImage = styled.img`
  width: 16.25rem;
  height: 16.25rem;
  margin-bottom: 0.625rem;
`

export const CardOptions = styled.form`
  padding: 0.5rem 0.375rem;
  margin-bottom: 1.125rem;
  background-color: var(--light-gray);
  border-radius: 10px;
`

export const CardOptionsGroup = styled.div`
  display: flex;
  gap: 0.375rem;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

export const CardOption = styled.div`
  flex: 1;

  input {
    display: none;

    &:checked + label {
      background-color: var(--white);
      box-shadow: var(--shade-1);
    }
  }

  label {
    display: block;
    width: 100%;
    padding: 0.5rem 0;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    border-radius: 5px;
  }
`

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    height: 2.5rem;
    padding: 0.5rem 1.125rem;
    font-weight: 700;

    &::before {
      margin-right: 0.5rem;
      content: "+";
    }

    span {
      display: inline-block;
      width: 1.375rem;
      height: 1.375rem;
      margin-left: 0.5rem;
      font-size: 0.8125rem;
      font-weight: 700;
      line-height: 1.375rem;
      color: var(--white);
      text-align: center;
      background-color: var(--primary);
      border-radius: 100%;
    }
  }
`

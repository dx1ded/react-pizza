import styled from "styled-components"

export const StyledCard = styled.article`
  text-align: center;

  & > h3 {
    margin-bottom: 1.25rem;
  }
`

export const CardImage = styled.img`
  width: 16.25rem;
  height: 16.25rem;
  margin-bottom: 0.625rem;
`

export const CardOptions = styled.div`
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

  button {
    padding: 0.75rem 1.125rem;
    font-weight: 700;

    &::before {
      margin-right: 0.5rem;
      content: "+";
    }
  }
`

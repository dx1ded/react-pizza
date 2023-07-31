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

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

export const CardOption = styled.label`
  flex: 1;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  button {
    width: 100%;
    padding: 0.5rem 0;
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--dark);
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

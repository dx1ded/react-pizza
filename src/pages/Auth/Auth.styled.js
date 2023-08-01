import styled from "styled-components"

export const StyledAuth = styled.div`
  max-width: 28rem;
  margin: 10rem auto;
`

export const StyledForm = styled.div`
  padding: 2rem 1.5rem;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shade-1);

  h2 {
    margin-bottom: 1.5rem;
  }

  form {
    margin-bottom: 1.3rem;

    [type="submit"] {
      display: block;
      width: 100%;
      padding: 0.5rem;
      font-weight: 700;
      border-radius: 5px;
    }
  }
`

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.3rem;
  font-weight: 700;
`

export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 0.9375rem;
  border: 1px solid var(--gray);
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const FormChange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 0.4rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`

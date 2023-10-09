import styled from "styled-components"

export const StyledPayMethod = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  button {
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    background-color: var(--light-gray);
    border: none;
    border-radius: 20px;

    * {
      pointer-events: none;
    }

    img {
      display: block;
      max-width: 9.375rem;
      margin: 0 auto 0.5rem;
    }
  }
`

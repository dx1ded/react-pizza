import styled from "styled-components"

export const StyledAuthMethod = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 0;

  button {
    padding: 2rem;
    cursor: pointer;
    background-color: var(--light-gray);
    border: none;
    border-radius: 10px;

    img {
      display: block;
      max-width: 7rem;
      margin: 0 auto 1rem;
    }
  }
`

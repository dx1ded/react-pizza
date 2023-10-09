import styled from "styled-components"
import { Button, Heading } from "@ui"

export const StyledReview = styled.div`
  ${Button} {
    padding: 0.7rem 1.3rem;
    margin-top: 2.5rem;
    font-weight: 700;
  }
`

export const ReviewSection = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  ${Heading} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      flex: 1;
      margin: 0 1rem;
      border-bottom: 1px dashed var(--black);
    }
  }

  table {
    width: 100%;
    text-align: left;
  }

  thead {
    background-color: var(--light-gray);
  }

  tbody.no-padding {
    td {
      padding: 0;
    }
  }

  tr {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  th {
    flex: 1;
    padding: 1rem;
  }
`

export const StyledTableItem = styled.tr`
  border-bottom: 1px solid var(--light-gray);

  td {
    flex: 1;
    padding: 0.8rem 1rem;
  }

  img {
    width: 100%;
  }
`

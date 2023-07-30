import styled from "styled-components"

const variants = {
  primary: {
    bg: "var(--primary)",
    color: "var(--white)",
  },
  secondary: {
    bg: "var(--white)",
    color: "var(--primary)",
    borderColor: "var(--primary)",
  },
}

export const Button = styled.button`
  display: inline-block;
  color: ${(props) => variants[props.$type].color};
  background-color: ${(props) => variants[props.$type].bg};
  border: 1px solid
    ${(props) => variants[props.$type].borderColor || variants[props.$type].bg};
  border-radius: 30px;
  outline: none;
`

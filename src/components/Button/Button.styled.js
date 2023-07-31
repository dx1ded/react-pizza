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
  dark: {
    bg: "var(--dark)",
    color: "var(--white)",
  },
  gray: {
    bg: "var(--light-gray)",
    color: "var(--dark)",
  },
  light: {
    bg: "var(--white)",
    color: "var(--dark)",
  },
}

export const Button = styled.button`
  display: inline-block;
  font-family: var(--font);
  color: ${(props) => variants[props.$type].color};
  cursor: pointer;
  background-color: ${(props) => variants[props.$type].bg};
  border: 1px solid
    ${(props) => variants[props.$type].borderColor || variants[props.$type].bg};
  border-radius: 30px;
`

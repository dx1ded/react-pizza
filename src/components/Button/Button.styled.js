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
  light_gray: {
    bg: "var(--white)",
    color: "#D7D7D7",
    borderColor: "#D7D7D7",
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

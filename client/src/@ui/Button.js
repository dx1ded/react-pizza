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
  light_gray: {
    bg: "var(--white)",
    color: "#D7D7D7",
    borderColor: "#D7D7D7",
  },
}

export const Button = styled.button`
  display: inline-block;
  color: ${(props) => variants[props.$type].color};
  cursor: pointer;
  background-color: ${(props) => variants[props.$type].bg};
  border: 1px solid
    ${(props) => variants[props.$type].borderColor || variants[props.$type].bg};
  border-radius: 30px;

  &:disabled {
    opacity: 0.7;
  }
`

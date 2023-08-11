import styled from "styled-components"

const variants = {
  primary: {
    bg: "var(--light-gray)",
    color: "var(--dark)",
  },
}

export const Input = styled.input`
  color: ${(props) => variants[props.$type].color};
  background-color: ${(props) => variants[props.$type].bg};
  border: 1px solid
    ${(props) => variants[props.$type].borderColor || variants[props.$type].bg};
  border-radius: 30px;
`

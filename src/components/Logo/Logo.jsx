import { Heading, Text } from "@ui"
import { StyledLogo } from "./Logo.styled"

export function Logo() {
  return (
    <StyledLogo to="/">
      <img src="pizza.png" alt="Pizza" />
      <div>
        <Heading $size="1.5rem" $color="var(--dark)" $weight="800" $mb="0.1rem">
          React Pizza
        </Heading>
        <Text $size="md" $color="var(--gray)" $weight="400">
          the best pizza in the Universe
        </Text>
      </div>
    </StyledLogo>
  )
}

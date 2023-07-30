import { Title } from "@components/Title/Title.styled"
import { Text } from "@components/Text/Text.styled"
import { StyledLogo } from "./Logo.styled"

export function Logo() {
  return (
    <StyledLogo to="/">
      <img src="pizza.png" alt="Pizza" />
      <div>
        <Title as="h2" $size="1.5rem" $color="var(--dark)" $weight="800">
          React Pizza
        </Title>
        <Text $size="md" $color="var(--gray)" $weight="400">
          the best pizza in the Universe
        </Text>
      </div>
    </StyledLogo>
  )
}

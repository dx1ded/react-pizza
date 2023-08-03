import { Container } from "@components/Container/Container.styled"
import { Title } from "@components/Title/Title.styled"
import { Text } from "@components/Text/Text.styled"
import { Icon } from "@components/Icon/Icon.styled"
import { StyledAccountInfo } from "./AccountInfo.styled"

export function AccountInfo() {
  return (
    <StyledAccountInfo>
      <Container>
        <img
          src="https://avatars.githubusercontent.com/u/45831463?v=4"
          alt="Profile"
        />
        <Title $size="md">Volodymyr Doskochynskyi</Title>
        <Text $size="md" $color="var(--blue)">
          @vovados1
        </Text>
        <Text $size="md">
          <Icon $name="calendar_month" />
          21.02.2005
        </Text>
      </Container>
    </StyledAccountInfo>
  )
}

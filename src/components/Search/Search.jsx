import {
  SearchInput,
  SearchResultList,
  StyledSearch,
} from "@components/Search/Seach.styled"
import { Icon } from "@components/Icon/Icon.styled"
import { Text } from "@components/Text/Text.styled"

export function Search() {
  return (
    <StyledSearch>
      <SearchInput>
        <Icon $name="search" $color="var(--gray)" $size="1.6rem" />
        <input type="text" placeholder="Search pizza..." />
      </SearchInput>
      <SearchResultList>
        <Text as="li" $size="md" $color="var(--dark)">
          Mozarella
        </Text>
        <Text as="li" $size="md" $color="var(--dark)">
          CheeseBurger Pizza
        </Text>
        <Text as="li" $size="md" $color="var(--dark)">
          3 types of Cheese
        </Text>
      </SearchResultList>
    </StyledSearch>
  )
}

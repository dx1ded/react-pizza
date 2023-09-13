import { Text } from "@ui"
import {
  SortOptions,
  SortOptionsList,
  SortTriangle,
  StyledSort,
} from "./Sort.styled"

export function Sort() {
  return (
    <StyledSort>
      <SortTriangle />
      <Text $size="sm" $color="var(--dark)">
        Sort by:
      </Text>
      <SortOptions>
        <Text as="button" $size="sm" $color="var(--primary)">
          popularity
        </Text>
        <SortOptionsList>
          <Text as="li" $size="sm" $color="var(--primary)">
            popularity
          </Text>
          <Text as="li" $size="sm" $color="var(--black)" $weight="400">
            by price
          </Text>
          <Text as="li" $size="sm" $color="var(--black)" $weight="400">
            by alphabet
          </Text>
        </SortOptionsList>
      </SortOptions>
    </StyledSort>
  )
}

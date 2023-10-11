import { useSelector } from "react-redux"
import { Container, Heading, Text, Icon } from "@ui"
import { Addresses } from "./Addresses"
import {
  AdressesSkeleton,
  BasicInfoSkeleton,
  NameSkeleton,
} from "./Info.skeletons"
import { formatDate } from "../../utils"
import { StyledInfo, InfoDate, InfoWrapper } from "./Info.styled"

export function Info() {
  const { user, addresses, isLoading } = useSelector((state) => state.profile)

  return (
    <StyledInfo>
      <Container $mw="58rem">
        <img src="profile-picture.webp" alt="Man eating pizza" />
        <InfoWrapper>
          {isLoading ? (
            <NameSkeleton />
          ) : (
            <>
              <Heading $size="1.75rem" $mb="0.2rem">
                {user.firstName} {user.lastName}
              </Heading>
              <Text $size="md" $color="var(--blue)" $mb="2rem">
                @{user.username}
              </Text>
            </>
          )}
          <section>
            <Heading $size="md" $mb="0.9rem">
              Basic information
            </Heading>
            {isLoading ? (
              <BasicInfoSkeleton />
            ) : (
              <>
                <InfoDate>
                  <Icon $size="1rem">calendar_month</Icon>
                  date of birth {formatDate(user.dateOfBirth)}
                </InfoDate>
                <InfoDate>
                  <Icon $size="1rem">schedule</Icon>
                  joined at {formatDate(user.createdAt)}
                </InfoDate>
              </>
            )}
          </section>
          <section>
            <Heading $size="md" $mb="0.9rem">
              Addresses
            </Heading>
            {isLoading ? (
              <AdressesSkeleton />
            ) : (
              <Addresses userId={user._id} addresses={addresses} />
            )}
          </section>
        </InfoWrapper>
      </Container>
    </StyledInfo>
  )
}

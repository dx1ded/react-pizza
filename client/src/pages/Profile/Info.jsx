import { useSelector } from "react-redux"
import { Container, Heading, Text, Icon } from "@ui"
import { StyledInfo, InfoDate } from "./Info.styled"
import { AdressesSkeleton, BasicInfoSkeleton, NameSkeleton } from "./Skeletons"
import { AddressSlider } from "./AddressSlider"
import { formatDate } from "../../utils"

export function Info() {
  const profile = useSelector((state) => state.profile)

  const user = profile.info

  return (
    <StyledInfo>
      <Container $mw="58rem">
        <img
          src="https://static.wixstatic.com/media/8b5c7c_08163db9119c45da8d492974b9c862b2~mv2.png/v1/fill/w_560,h_564,al_c,lg_1,q_85,enc_auto/8b5c7c_08163db9119c45da8d492974b9c862b2~mv2.png"
          alt="Profile"
        />
        <div style={{ minWidth: 0, width: "100%" }}>
          {profile.isLoading ? (
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
            {profile.isLoading ? (
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
            {profile.isLoading ? (
              <AdressesSkeleton />
            ) : (
              <AddressSlider userId={user._id} addresses={profile.addresses} />
            )}
          </section>
        </div>
      </Container>
    </StyledInfo>
  )
}

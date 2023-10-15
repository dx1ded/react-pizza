import { useState } from "react"
import { MergeStrategies } from "@components/Strategy/MergeStrategies"
import { Strategy } from "@components/Strategy/Strategy"
import { Container } from "@ui"
import { AuthMethod } from "./AuthMethod"
import { SignInForm } from "./SignIn/SignInForm"
import { Credentials } from "./SignUp/Credentials"
import { FullName } from "./SignUp/FullName"
import { Username } from "./SignUp/Username"
import { DateOfBirth } from "./SignUp/DateOfBirth"
import { StyledAuth } from "./Auth.styled"

export function Auth() {
  const [hasAccount, setHasAccount] = useState(false)

  return (
    <StyledAuth>
      <Container $mw="35rem">
        <MergeStrategies>
          <Strategy>
            <AuthMethod title="Choose method" setHasAccount={setHasAccount} />
          </Strategy>
          {hasAccount ? (
            <Strategy hasNavigation>
              <SignInForm title="Sign in" customNextBtnHandler />
            </Strategy>
          ) : (
            <Strategy hasNavigation>
              <Credentials title="Credentials" customNextBtnHandler />
              <FullName title="Full Name" customNextBtnHandler />
              <Username title="Username" customNextBtnHandler />
              <DateOfBirth title="Date of birth" customNextBtnHandler />
            </Strategy>
          )}
        </MergeStrategies>
      </Container>
    </StyledAuth>
  )
}

import { Heading } from "@ui"
import { StyledAuthMethod } from "./AuthMethod.styled"

export function AuthMethod({ setHasAccount, setNextStage }) {
  const clickHandler = (boolean) => {
    setHasAccount(boolean)
    setNextStage()
  }

  return (
    <StyledAuthMethod>
      <button
        type="button"
        aria-label="Previous stage"
        onClick={() => clickHandler(true)}
      >
        <img src="sign-in.svg" alt="Sign in" />
        <Heading as="span" $size="md">
          Sign in
        </Heading>
      </button>
      <button
        type="button"
        aria-label="Next stage"
        onClick={() => clickHandler(false)}
      >
        <img src="sign-up.svg" alt="Sign up" />
        <Heading as="span" $size="md">
          Sign up
        </Heading>
      </button>
    </StyledAuthMethod>
  )
}

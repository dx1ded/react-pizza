import { useState } from "react"
import { StyledAuth } from "./Auth.styled"
import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"

export function Auth() {
  const [hasAccount, setHasAccount] = useState(false)

  return (
    <StyledAuth>
      {hasAccount ? (
        <LoginForm setHasAccount={setHasAccount} />
      ) : (
        <RegisterForm setHasAccount={setHasAccount} />
      )}
    </StyledAuth>
  )
}

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { StyledAuth } from "./Auth.styled"
import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"

export function Auth() {
  const [hasAccount, setHasAccount] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("secret")) {
      navigate("/")
    }
  }, [navigate])

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

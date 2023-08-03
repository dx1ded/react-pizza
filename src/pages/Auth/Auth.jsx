import { useState } from "react"
import { useFormik } from "formik"
import { Title } from "@components/Title/Title.styled"
import { Button } from "@components/Button/Button.styled"
import { Text } from "@components/Text/Text.styled"
import {
  FormChange,
  FormInput,
  FormLabel,
  StyledAuth,
  StyledForm,
} from "./Auth.styled"

function LoginForm({ setHasAccount }) {
  const { values, handleChange, handleBlur } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
  })

  return (
    <StyledForm>
      <Title as="h2" $type="lg">
        🍕 Sign in
      </Title>
      <form autoComplete="off">
        <FormLabel htmlFor="Login">Login</FormLabel>
        <FormInput
          type="text"
          id="Login"
          value={values.firstName}
          placeholder="Enter your e-mail or username"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          type="password"
          id="password"
          value={values.password}
          placeholder="Enter your password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button as="input" type="submit" $type="primary" value="Sign in" />
      </form>
      <FormChange>
        <Text $size="md">Don&apos;t have an account?</Text>
        <Text
          as="button"
          $size="md"
          $color="var(--blue)"
          onClick={() => setHasAccount(false)}
        >
          Sign in
        </Text>
      </FormChange>
    </StyledForm>
  )
}

function RegisterForm({ setHasAccount }) {
  const { values, handleChange, handleBlur } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
  })

  return (
    <StyledForm>
      <Title as="h2" $type="lg">
        🍕 Sign up
      </Title>
      <form autoComplete="off">
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <FormInput
          type="text"
          id="firstName"
          value={values.firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormLabel htmlFor="lastName">Last name</FormLabel>
        <FormInput
          type="text"
          id="lastName"
          value={values.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormInput
          type="email"
          id="email"
          value={values.email}
          placeholder="Enter your e-mail"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          type="password"
          id="password"
          value={values.password}
          placeholder="Enter your password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormLabel htmlFor="passwordConfirm">Confirm password</FormLabel>
        <FormInput
          type="password"
          id="passwordConfirm"
          value={values.passwordConfirm}
          placeholder="Re-enter your password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button as="input" type="submit" $type="primary" value="Sign up" />
      </form>
      <FormChange>
        <Text $size="md">Already have an account?</Text>
        <Text
          as="button"
          $size="md"
          $color="var(--blue)"
          onClick={() => setHasAccount(true)}
        >
          Sign in
        </Text>
      </FormChange>
    </StyledForm>
  )
}

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

import { useFormik } from "formik"
import { Heading, Text } from "@ui"
import {
  FormChange,
  FormChangeButton,
  FormInput,
  FormLabel,
  FormSubmit,
  StyledForm,
} from "./Auth.styled"

export function LoginForm({ setHasAccount }) {
  const { values, handleChange, handleBlur } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
  })

  return (
    <StyledForm>
      <Heading $size="1.75rem" $mb="1.5rem">
        🍕 Sign in
      </Heading>
      <form autoComplete="off">
        <FormLabel htmlFor="Login">Login</FormLabel>
        <FormInput
          type="text"
          id="Login"
          value={values.firstName}
          placeholder="E-mail or username"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          type="password"
          id="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormSubmit value="Sign in" />
      </form>
      <FormChange>
        <Text $size="md">Don&apos;t have an account?</Text>
        <FormChangeButton onClick={() => setHasAccount(false)}>
          Sign up
        </FormChangeButton>
      </FormChange>
    </StyledForm>
  )
}

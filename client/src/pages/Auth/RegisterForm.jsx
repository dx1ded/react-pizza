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

export function RegisterForm({ setHasAccount }) {
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
      <Heading $size="1.75rem" $mb="1.5rem">
        🍕 Sign up
      </Heading>
      <form autoComplete="off">
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <FormInput
          type="text"
          id="firstName"
          value={values.firstName}
          placeholder="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormLabel htmlFor="lastName">Last name</FormLabel>
        <FormInput
          type="text"
          id="lastName"
          value={values.lastName}
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormInput
          type="email"
          id="email"
          value={values.email}
          placeholder="E-mail"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormLabel htmlFor="username">Username</FormLabel>
        <FormInput
          type="email"
          id="username"
          value={values.username}
          placeholder="Username (without @)"
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
        <FormLabel htmlFor="passwordConfirm">Confirm password</FormLabel>
        <FormInput
          type="password"
          id="passwordConfirm"
          value={values.passwordConfirm}
          placeholder="Confirm password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormSubmit value="Sign up" />
      </form>
      <FormChange>
        <Text $size="md">Already have an account?</Text>
        <FormChangeButton onClick={() => setHasAccount(true)}>
          Sign in
        </FormChangeButton>
      </FormChange>
    </StyledForm>
  )
}

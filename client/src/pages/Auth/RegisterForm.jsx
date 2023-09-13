import { useFormik } from "formik"
import { Heading, Text } from "@ui"
import { registerSchema } from "./yup.schemas"
import {
  FormChange,
  FormChangeButton,
  FormInput,
  FormLabel,
  FormSubmit,
  StyledForm,
} from "./Auth.styled"

const onSubmit = () => {
  console.log("Submitted")
}

export function RegisterForm({ setHasAccount }) {
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
  })

  return (
    <StyledForm>
      <Heading $size="1.75rem" $mb="1.5rem">
        🍕 Sign up
      </Heading>
      <form onSubmit={handleSubmit} autoComplete="off">
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
        <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
        <FormInput
          type="password"
          id="confirmPassword"
          value={values.confirmPassword}
          placeholder="Confirm password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormSubmit type="submit">Sign up</FormSubmit>
      </form>
      <FormChange>
        <Text $size="md">Already have an account?</Text>
        <FormChangeButton as="button" onClick={() => setHasAccount(true)}>
          Sign in
        </FormChangeButton>
      </FormChange>
    </StyledForm>
  )
}

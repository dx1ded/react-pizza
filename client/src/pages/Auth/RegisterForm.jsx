import { useState } from "react"
import { useDispatch } from "react-redux"
import { useFormik } from "formik"
import DatePicker from "react-datepicker"
import { Heading, Text } from "@ui"
import { Loader } from "@components/Loader/Loader"
import { setSecret } from "@redux/secret/actions"
import { SignupSchema } from "./yup.schemas"
import {
  FormChange,
  FormChangeButton,
  FormInput,
  FormLabelWrapper,
  FormLabel,
  FormSubmit,
  StyledForm,
} from "./Auth.styled"

import "react-datepicker/dist/react-datepicker.css"

export function RegisterForm({ setHasAccount }) {
  const dispatch = useDispatch()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    async onSubmit(data) {
      try {
        setIsLoading(true)

        const request = await fetch("/api/auth/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        const json = await request.json()

        if (!request.ok) throw json

        dispatch(setSecret(json.secret))
        localStorage.setItem("secret", json.secret)
      } catch (e) {
        setError(e.message)
        setIsLoading(false)
      }
    },
  })

  const onChangeHandler = (event) => {
    if (error) setError(false)
    handleChange(event)
  }

  return (
    <StyledForm>
      <Heading $size="1.75rem" $mb="1.5rem">
        🍕 Sign up
      </Heading>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate>
        <FormLabelWrapper>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          {errors.firstName && touched.firstName && (
            <Text $size="sm" $color="var(--gray)">
              {errors.firstName}
            </Text>
          )}
        </FormLabelWrapper>
        <FormInput
          type="text"
          id="firstName"
          value={values.firstName}
          placeholder="First Name"
          onChange={onChangeHandler}
          onBlur={handleBlur}
        />
        <FormLabelWrapper>
          <FormLabel htmlFor="lastName">Last name</FormLabel>
          {errors.lastName && touched.lastName && (
            <Text $size="sm" $color="var(--gray)">
              {errors.lastName}
            </Text>
          )}
        </FormLabelWrapper>
        <FormInput
          type="text"
          id="lastName"
          value={values.lastName}
          placeholder="Last Name"
          onChange={onChangeHandler}
          onBlur={handleBlur}
        />
        <FormLabelWrapper>
          <FormLabel htmlFor="dateOfBirth">Date of birth</FormLabel>
          {errors.dateOfBirth && touched.dateOfBirth && (
            <Text $size="sm" $color="var(--gray)">
              {errors.dateOfBirth}
            </Text>
          )}
        </FormLabelWrapper>
        <FormInput
          as={DatePicker}
          showYearDropdown
          showMonthDropdown
          selected={values.dateOfBirth}
          onChange={(date) => setFieldValue("dateOfBirth", date)}
        />
        <FormLabelWrapper>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          {errors.email && touched.email && (
            <Text $size="sm" $color="var(--gray)">
              {errors.email}
            </Text>
          )}
        </FormLabelWrapper>
        <FormInput
          type="email"
          id="email"
          value={values.email}
          placeholder="E-mail"
          onChange={onChangeHandler}
          onBlur={handleBlur}
        />
        <FormLabelWrapper>
          <FormLabel htmlFor="username">Username</FormLabel>
          {errors.username && touched.username && (
            <Text $size="sm" $color="var(--gray)">
              {errors.username}
            </Text>
          )}
        </FormLabelWrapper>
        <FormInput
          type="text"
          id="username"
          value={values.username}
          placeholder="Username (without @)"
          onChange={onChangeHandler}
          onBlur={handleBlur}
        />
        <FormLabelWrapper>
          <FormLabel htmlFor="password">Password</FormLabel>
          {errors.password && touched.password && (
            <Text $size="sm" $color="var(--gray)">
              {errors.password}
            </Text>
          )}
        </FormLabelWrapper>
        <FormInput
          type="password"
          id="password"
          value={values.password}
          placeholder="Password"
          onChange={onChangeHandler}
          onBlur={handleBlur}
        />
        <FormLabelWrapper>
          <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
          {errors.confirmPassword && touched.confirmPassword && (
            <Text $size="sm" $color="var(--gray)">
              {errors.confirmPassword}
            </Text>
          )}
        </FormLabelWrapper>
        <FormInput
          type="password"
          id="confirmPassword"
          value={values.confirmPassword}
          placeholder="Confirm password"
          onChange={onChangeHandler}
          onBlur={handleBlur}
        />
        <FormSubmit type="submit" disabled={isLoading}>
          {isLoading ? <Loader /> : "Sign up"}
        </FormSubmit>
        {error && (
          <Text $size="sm" $color="red" $mt="0.7rem">
            {error}
          </Text>
        )}
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

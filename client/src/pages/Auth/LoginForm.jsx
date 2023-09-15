import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { Heading, Text } from "@ui"
import { Loader } from "@components/Loader/Loader"
import { SigninSchema } from "./yup.schemas"
import {
  FormChange,
  FormChangeButton,
  FormInput,
  FormLabelWrapper,
  FormLabel,
  FormSubmit,
  StyledForm,
} from "./Auth.styled"

export function LoginForm({ setHasAccount }) {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        login: "",
        password: "",
      },
      validationSchema: SigninSchema,
      async onSubmit(data) {
        try {
          setIsLoading(true)

          const request = await fetch("/api/auth/sign-in", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })

          const json = await request.json()

          if (!request.ok) throw json

          localStorage.setItem("secret", JSON.stringify(json))
          navigate("/")
        } catch (e) {
          setError(e.message)
        }

        setIsLoading(false)
      },
    })

  const onChangeHandler = (event) => {
    if (error) setError(false)
    handleChange(event)
  }

  return (
    <StyledForm>
      <Heading $size="1.75rem" $mb="1.5rem">
        🍕 Sign in
      </Heading>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate>
        <FormLabelWrapper>
          <FormLabel htmlFor="login">Login</FormLabel>
          {errors.login && touched.login && (
            <Text $size="sm" $color="var(--gray)">
              {errors.login}
            </Text>
          )}
        </FormLabelWrapper>
        <FormInput
          type="text"
          id="login"
          value={values.firstName}
          placeholder="E-mail or username"
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
        <FormSubmit type="submit" disabled={isLoading}>
          {isLoading ? <Loader /> : "Sign in"}
        </FormSubmit>
        {error && (
          <Text $size="sm" $color="red" $mt="0.7rem">
            {error}
          </Text>
        )}
      </form>
      <FormChange>
        <Text $size="md">Don&apos;t have an account?</Text>
        <FormChangeButton as="button" onClick={() => setHasAccount(false)}>
          Sign up
        </FormChangeButton>
      </FormChange>
    </StyledForm>
  )
}

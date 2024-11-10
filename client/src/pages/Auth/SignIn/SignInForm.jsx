import { forwardRef, useImperativeHandle } from "react"
import { useDispatch } from "react-redux"
import { useFormik } from "formik"
import { setSecret } from "@redux/secret/actions"
import { Input } from "@ui"
import { SignInSchema } from "../yup.schemas"
import { InputWrapper, ValidationResult } from "../Auth.styled"

export const SignInForm = forwardRef(function SignInForm(
  { setButtonsDisabled },
  ref
) {
  const dispatch = useDispatch()
  const { values, errors, touched, handleChange, submitForm } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: SignInSchema,
    async onSubmit(values, { setErrors }) {
      setButtonsDisabled(true)

      const { secret } = await fetch("/api/auth/sign-in", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json())

      setButtonsDisabled(false)

      if (!secret) {
        return setErrors({ login: "User not found" })
      }
      dispatch(setSecret(secret))
      localStorage.setItem("secret", secret)
    },
  })

  useImperativeHandle(ref, () => ({
    customNextBtnHandler: submitForm,
  }))

  return (
    <div>
      <InputWrapper>
        <ValidationResult $hasError={errors.login && touched.login}>
          {errors.login}
        </ValidationResult>
        <Input
          $type="primary"
          type="text"
          id="login"
          placeholder="E-mail or username"
          autoComplete="off"
          defaultValue={values.login}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <ValidationResult $hasError={errors.password && touched.password}>
          {errors.password}
        </ValidationResult>
        <Input
          $type="primary"
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="off"
          defaultValue={values.password}
          onChange={handleChange}
        />
      </InputWrapper>
    </div>
  )
})

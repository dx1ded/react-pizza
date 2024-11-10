import { forwardRef, useImperativeHandle } from "react"
import { useFormik } from "formik"
import { Input } from "@ui"
import { CredentailsSchema } from "../yup.schemas"
import { InputWrapper, ValidationResult } from "../Auth.styled"

export const Credentials = forwardRef(function Credentials(
  { setNextStage, setButtonsDisabled, addData },
  ref
) {
  const { values, errors, touched, handleChange, submitForm } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: CredentailsSchema,
    async onSubmit(values, { setErrors }) {
      setButtonsDisabled(true)

      const { isTaken } = await fetch("/api/auth/isEmailTaken", {
        method: "POST",
        body: JSON.stringify({ email: values.email }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json())

      setButtonsDisabled(false)

      if (isTaken) {
        return setErrors({ email: "E-mail is already taken" })
      }

      addData(values)
      setNextStage()
    },
  })

  useImperativeHandle(ref, () => ({
    customNextBtnHandler: submitForm,
  }))

  return (
    <div>
      <InputWrapper>
        <ValidationResult $hasError={errors.email && touched.email}>
          {errors.email}
        </ValidationResult>
        <Input
          $type="primary"
          type="email"
          id="email"
          placeholder="E-mail"
          autoComplete="off"
          defaultValue={values.email}
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
      <InputWrapper>
        <ValidationResult
          $hasError={errors.confirmPassword && touched.confirmPassword}
        >
          {errors.confirmPassword}
        </ValidationResult>
        <Input
          $type="primary"
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          autoComplete="off"
          defaultValue={values.confirmPassword}
          onChange={handleChange}
        />
      </InputWrapper>
    </div>
  )
})

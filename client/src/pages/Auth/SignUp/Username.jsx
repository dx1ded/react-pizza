import { forwardRef, useImperativeHandle } from "react"
import { useFormik } from "formik"
import { Input } from "@ui"
import { getServerUrl } from "@/utils"
import { UsernameSchema } from "../yup.schemas"
import { InputWrapper, LabelledInput, ValidationResult } from "../Auth.styled"

export const Username = forwardRef(function Username(
  { setNextStage, setButtonsDisabled, addData },
  ref
) {
  const { values, errors, touched, handleChange, submitForm } = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: UsernameSchema,
    async onSubmit(values, { setErrors }) {
      setButtonsDisabled(true)

      const { isTaken } = await fetch(
        getServerUrl("/api/auth/isUsernameTaken"),
        {
          method: "POST",
          body: JSON.stringify({ username: values.username }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json())

      setButtonsDisabled(false)

      if (isTaken) {
        return setErrors({ username: "Username is already taken" })
      }

      addData(values)
      setNextStage()
    },
  })

  useImperativeHandle(ref, () => ({
    customNextBtnHandler: submitForm,
  }))

  return (
    <InputWrapper>
      <ValidationResult $hasError={errors.username && touched.username}>
        {errors.username}
      </ValidationResult>
      <LabelledInput>
        <label htmlFor="username">@</label>
        <Input
          $type="primary"
          type="text"
          id="username"
          placeholder="Username"
          autoComplete="off"
          defaultValue={values.username}
          onChange={handleChange}
        />
      </LabelledInput>
    </InputWrapper>
  )
})

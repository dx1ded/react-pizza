import { forwardRef, useImperativeHandle } from "react"
import { useFormik } from "formik"
import { Input } from "@ui"
import { FullNameSchema } from "../yup.schemas"
import { InputWrapper, ValidationResult } from "../Auth.styled"

export const FullName = forwardRef(function FullName(
  { setNextStage, addData },
  ref
) {
  const { values, errors, touched, handleChange, submitForm } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: FullNameSchema,
    onSubmit(values) {
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
        <ValidationResult $hasError={errors.firstName && touched.firstName}>
          {errors.firstName}
        </ValidationResult>
        <Input
          $type="primary"
          type="text"
          id="firstName"
          placeholder="First Name"
          defaultValue={values.firstName}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <ValidationResult $hasError={errors.lastName && touched.lastName}>
          {errors.lastName}
        </ValidationResult>
        <Input
          $type="primary"
          type="text"
          id="lastName"
          placeholder="Last Name"
          defaultValue={values.lastName}
          onChange={handleChange}
        />
      </InputWrapper>
    </div>
  )
})

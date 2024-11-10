import { forwardRef, useImperativeHandle } from "react"
import { useFormik } from "formik"
import DatePicker from "@taak/react-modern-calendar-datepicker"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { setSecret } from "@redux/secret/actions"
import { Icon, Input } from "@ui"
import breakpoints from "@breakpoints"
import { DateOfBirthSchema } from "../yup.schemas"
import { formatDate } from "@/utils"

import { InputWrapper, LabelledInput, ValidationResult } from "../Auth.styled"
import "@taak/react-modern-calendar-datepicker/lib/DatePicker.css"

const StyledDateOfBirth = styled.div`
  .DatePicker {
    position: static;
    display: block;
  }

  .responsive-calendar {
    font-size: 0.55rem;

    @media ${breakpoints.device.xl} {
      font-size: 0.5rem;
    }

    @media ${breakpoints.device.lg} {
      font-size: 0.45rem;
    }

    @media ${breakpoints.device.xs} {
      font-size: 0.4rem;
    }
  }
`

export const DateOfBirth = forwardRef(function DateOfBirth(
  { setButtonsDisabled, data },
  ref
) {
  const dispatch = useDispatch()
  const { values, errors, touched, setFieldValue, submitForm } = useFormik({
    initialValues: {
      dateOfBirth: new Date(),
    },
    validationSchema: DateOfBirthSchema,
    async onSubmit(values) {
      setButtonsDisabled(true)

      const { secret } = await fetch("/api/auth/sign-up", {
        method: "POST",
        body: JSON.stringify({ ...data, ...values }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json())

      setButtonsDisabled(false)
      dispatch(setSecret(secret))
      localStorage.setItem("secret", secret)
    },
  })

  useImperativeHandle(ref, () => ({
    customNextBtnHandler: submitForm,
  }))

  const renderCustomInput = ({ ref }) => (
    <Input
      ref={ref}
      style={{ position: "static", display: "block" }}
      $type="primary"
      type="text"
      id="dateOfBirth"
      placeholder="Date of birth"
      readOnly
      value={formatDate(values.dateOfBirth)}
    />
  )

  return (
    <StyledDateOfBirth>
      <InputWrapper>
        <ValidationResult $hasError={errors.dateOfBirth && touched.dateOfBirth}>
          {errors.dateOfBirth}
        </ValidationResult>
        <LabelledInput>
          <label htmlFor="dateOfBirth">
            <Icon $size="1.1rem">calendar_today</Icon>
          </label>
          <DatePicker
            colorPrimary="#fe5f1e"
            renderInput={renderCustomInput}
            calendarClassName="responsive-calendar"
            onChange={(date) =>
              setFieldValue(
                "dateOfBirth",
                new Date(date.year, date.month, date.day)
              )
            }
          />
        </LabelledInput>
      </InputWrapper>
    </StyledDateOfBirth>
  )
})

import { forwardRef } from "react"
import { useFormik } from "formik"
import styled from "styled-components"
import { Text } from "@ui"
import {
  ModalInput,
  ModalLabel,
  ModalRow,
  ModalWrapper,
} from "@components/Modal/Modal.styled"
import { useSelect } from "@components/Select/useSelect"
import { AddressSchema } from "./yup.schemas"
import { provincesList } from "../../utils"

const StyledAddressForm = styled.form`
  ${ModalInput}[type="number"] {
    appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      appearance: none;
    }
  }
`

const postalCodeHandler = (event, cb) => {
  const value = event.target.value.toUpperCase()
  const [partOne, partTwo] = value.split(" ")
  let newStr = value

  if (event.key === "Backspace" && newStr.length === 4 && !partTwo) {
    newStr = partOne
  } else if (partOne.length === 4 && !partTwo) {
    newStr = `${partOne.substring(0, 3)} ${partOne[3]}`
  }

  event.target.value = newStr
  cb(newStr)
}

export const AddressForm = forwardRef(function AddressForm(
  { data, onApply },
  ref
) {
  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        title: data.title,
        unit: data.unit,
        streetNumber: data.streetNumber,
        streetName: data.streetName,
        city: data.city,
        province: data.province,
        postalCode: data.postalCode,
      },
      validationSchema: AddressSchema,
      onSubmit: (values) => onApply({ ...data, ...values }),
    })

  const select = useSelect({
    list: provincesList,
    activeIndex: -1,
    onChange: (province) => setFieldValue("province", province),
  })

  return (
    <StyledAddressForm
      ref={ref}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      <ModalLabel htmlFor="title">Title</ModalLabel>
      <ModalRow>
        <ModalWrapper>
          {errors.title && touched.title && (
            <Text $size="0.75rem" $color="red" $mb="0.2rem">
              {errors.title}
            </Text>
          )}
          <ModalInput
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            defaultValue={values.title}
            onChange={handleChange}
          />
        </ModalWrapper>
      </ModalRow>
      <ModalLabel htmlFor="unit">Street</ModalLabel>
      <ModalRow>
        <ModalWrapper>
          {errors.unit && touched.unit && (
            <Text $size="0.75rem" $color="red" $mb="0.2rem">
              {errors.unit}
            </Text>
          )}
          <ModalInput
            type="number"
            name="unit"
            id="unit"
            placeholder="Unit (optional)"
            defaultValue={values.unit}
            onChange={handleChange}
          />
        </ModalWrapper>
        <ModalWrapper>
          {errors.streetNumber && touched.streetNumber && (
            <Text $size="0.75rem" $color="red" $mb="0.2rem">
              {errors.streetNumber}
            </Text>
          )}
          <ModalInput
            type="number"
            name="streetNumber"
            placeholder="Street number"
            defaultValue={values.streetNumber}
            onChange={handleChange}
          />
        </ModalWrapper>
        <ModalWrapper>
          {errors.streetName && touched.streetName && (
            <Text $size="0.75rem" $color="red" $mb="0.2rem">
              {errors.streetName}
            </Text>
          )}
          <ModalInput
            type="text"
            name="streetName"
            placeholder="Street name"
            defaultValue={values.streetName}
            onChange={handleChange}
          />
        </ModalWrapper>
      </ModalRow>
      <ModalLabel htmlFor="city">Address</ModalLabel>
      <ModalRow>
        <ModalWrapper>
          {errors.city && touched.city && (
            <Text $size="0.75rem" $color="red" $mb="0.2rem">
              {errors.city}
            </Text>
          )}
          <ModalInput
            type="text"
            name="city"
            id="city"
            placeholder="City"
            defaultValue={values.city}
            onChange={handleChange}
          />
        </ModalWrapper>
        <ModalWrapper>
          {errors.province && touched.province && (
            <Text $size="0.75rem" $color="red" $mb="0.2rem">
              {errors.province}
            </Text>
          )}
          <ModalInput
            type="text"
            name="province"
            placeholder="Province"
            readOnly
            style={{ cursor: "pointer" }}
            defaultValue={values.province}
            onClick={select.toggle}
          />
          {select.contextHandler}
        </ModalWrapper>
        <ModalWrapper>
          {errors.postalCode && touched.postalCode && (
            <Text $size="0.75rem" $color="red" $mb="0.2rem">
              {errors.postalCode}
            </Text>
          )}
          <ModalInput
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            defaultValue={values.postalCode}
            onKeyUp={(event) =>
              postalCodeHandler(event, (value) =>
                setFieldValue("postalCode", value)
              )
            }
          />
        </ModalWrapper>
      </ModalRow>
    </StyledAddressForm>
  )
})

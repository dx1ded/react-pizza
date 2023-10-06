import * as yup from "yup"

const postalCodeTest = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/

export const AddressSchema = yup.object().shape({
  title: yup.string().required("Required"),
  unit: yup.number().nullable(),
  streetNumber: yup.number().required("Required"),
  streetName: yup.string().required("Required"),
  city: yup.string().required("Required"),
  province: yup.string().required("Required"),
  postalCode: yup
    .string()
    .matches(postalCodeTest, {
      message: "Invalid postal code",
    })
    .required("Required"),
})

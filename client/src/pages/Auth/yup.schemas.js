import * as yup from "yup"

const passwordTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,128}$/

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid e-mail").required("Required"),
  username: yup.string().min(3).max(16),
  password: yup
    .string()
    .min(6)
    .max(128)
    .matches(passwordTest, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
})

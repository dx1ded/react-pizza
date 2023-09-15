import * as yup from "yup"

const passwordTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,128}$/

export const SignupSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid e-mail").required("Required"),
  username: yup.string().min(3).max(16).required("Required"),
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

export const SigninSchema = yup.object().shape({
  login: yup.string().required("Required"),
  password: yup
    .string()
    .min(6)
    .max(128)
    .matches(passwordTest, { message: "Password doesn't match the schema" })
    .required("Required"),
})

import * as yup from "yup"

const passwordTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,128}$/

export const CredentailsSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid e-mail").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(128, "Password must be less than 128 characters")
    .matches(passwordTest, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
})

export const FullNameSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
})

export const UsernameSchema = yup.object().shape({
  username: yup.string().min(3).max(16).required("Required"),
})

export const DateOfBirthSchema = yup.object().shape({
  dateOfBirth: yup
    .date()
    .max(
      new Date(Date.now() - 504576000000),
      "You must be at least 16 years old"
    )
    .required("Required"),
})

export const SignInSchema = yup.object().shape({
  login: yup.string().required("Required"),
  password: yup
    .string()
    .min(6)
    .max(128)
    .matches(passwordTest, { message: "Password doesn't match the schema" })
    .required("Required"),
})

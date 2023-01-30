import * as Yup from "yup"

export const signUpSchema = {
  username: Yup.string()
    .max(20, "Must contain 20 characters or less")
    .matches(
      /^([a-zA-Z'-.]+ [a-zA-Z'-.]+\w{2,}(?: [a-zA-Z'-.]+)?)$/gm,
      "Must contain only letters, two or more names and a space between them"
    )
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .max(20, "Must contain 20 characters or less")
    .min(6, "Must contain 6 characters or more")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/,
      "Must contain at least one uppercase letter, one lowercase letter and one number"
    )
    .required("Required")
}

export const signInSchema = {
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .max(20, "Must contain 20 characters or less")
    .min(6, "Must contain 6 characters or more")
    // .matches(
    //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/,
    //   "Must contain at least one uppercase letter, one lowercase letter and one number"
    // )
    .required("Required")
}

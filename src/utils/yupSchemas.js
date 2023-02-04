import * as Yup from "yup"

export const signUpSchema = {
  username: Yup.string()
    .max(20, "Must contain 20 characters or less")
    .matches(/^[a-zA-Z]*$/, "Must contain only letters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .max(20, "Must contain 20 characters or less")
    .min(7, "Must contain 7 characters or more")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{7,20}$/,
      "Must contain at least one uppercase letter, one lowercase letter and one number"
    )
    .required("Required")
}

export const signInSchema = {
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .max(20, "Must contain 20 characters or less")
    .min(7, "Must contain 7 characters or more")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{7,20}$/,
      "Must contain at least one uppercase letter, one lowercase letter and one number"
    )
    .required("Required")
}

export const pasteSchema = {
  title: Yup.string()
    .max(20, "Must contain 20 characters or less")
    .matches(/^[a-zA-Z]*$/, "Must contain only letters")
    .required("Required"),
  syntaxHighlight: Yup.string().required("Required"),
  tags: Yup.string()
    .max(20, "Must contain 20 characters or less")
    .matches(
      /^([a-zA-Z'-.]+ [a-zA-Z'-.]+\w{1,}(?: [a-zA-Z'-.]+)?)$/gm,
      "Must contain only letters, one or more tags and a space between them"
    ),
  exposure: Yup.string().required("Required")
}

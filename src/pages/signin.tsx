import { Form, Formik } from "formik"
import * as Yup from "yup"
import Button from "../components/Button"
import { signInSchema } from "../utils/yupSchemas"
import AccountQuestion from "../components/AccountQuestion"
import { useSignIn } from "@/hooks/useSignIn"
import FormInput from "@/components/FormInput"
import FormStringInput from "@/components/FormStringInput"
import FormPasswordInput from "@/components/FormPasswordInput"

export default function Signin() {
  const { handleSubmit } = useSignIn()

  return (
    <div className="w-full flex flex-col items-center">
      <header className="mb-10">
        <h1 className="font-bold text-[20px] text-white">Sign in</h1>
      </header>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={Yup.object(signInSchema)}
        onSubmit={values => handleSubmit(values)}
      >
        <Form className="w-full max-w-[410px] flex flex-col justify-start items-center gap-4">
          <FormInput name="email">
            <FormStringInput
              type="email"
              name="email"
              label="Email"
              placeholder="example@gmail.com"
            />
          </FormInput>
          <FormInput name="password">
            <FormPasswordInput
              type="password"
              name="password"
              label="Password"
              placeholder="***********"
              minLength={4}
              maxLength={15}
            />
          </FormInput>
          <Button className="w-full" variant="primary" text="Log in" type="submit" />
          <AccountQuestion question="Don't have an account?" href="/signup" hrefText="Sign up" />
        </Form>
      </Formik>
    </div>
  )
}

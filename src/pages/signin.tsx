import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormGroupInput from "../components/FormGroupInput"
import Button from "../components/Button"
import { signInSchema } from "../utils/yupSchemas"
import AccountQuestion from "../components/AccountQuestion"
import { useSignIn } from "@/hooks/useSignIn"

export default function Signin() {
  const { handleSubmit } = useSignIn()

  return (
    <main className="flex place-content-center box-border">
      <div className="w-full max-w-maximum h-full p-5 pt-20 box-border bg-green-2">
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
          <Form className="max-w-[400px] flex flex-col justify-start items-center gap-4">
            <FormGroupInput
              type="email"
              name="email"
              label="Email"
              placeholder="example@gmail.com"
            />
            <FormGroupInput
              type="password"
              name="password"
              label="Password"
              placeholder="***********"
              minLength={4}
              maxLength={15}
            />
            <Button
              className="w-full bg-red-1 dark:bg-red-1"
              variant="primary"
              text="Create Account"
              type="submit"
            />
            <AccountQuestion question="Don't have an account?" href="/signup" hrefText="Sign up" />
          </Form>
        </Formik>
      </div>
    </main>
  )
}

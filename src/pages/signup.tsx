import TextInput from "@/components/TextInput"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormGroupInput from "../components/FormGroupInput"
import Button from "../components/Button"
import { signUpSchema } from "../utils/yupSchemas"
import AccountQuestion from "../components/AccountQuestion"
import { useSignUp } from "@/hooks/useSignUp"

export default function Signup() {
  const { handleSubmit } = useSignUp()

  return (
    <main className="flex place-content-center box-border">
      <div className="w-full max-w-maximum h-full p-5 pt-20 box-border bg-green-2">
        <header className="mb-10">
          <h1 className="font-bold text-[20px] text-white">Sign up</h1>
          <p>Join to Pastesnip and share your pastes with all the world!</p>
        </header>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: ""
          }}
          validationSchema={Yup.object(signUpSchema)}
          onSubmit={values => handleSubmit(values)}
        >
          <Form className="max-w-[400px] flex flex-col justify-start items-center gap-4">
            <FormGroupInput type="string" name="username" label="Username" placeholder="juanx209" />
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
            <AccountQuestion
              question="Already have an account?"
              href="/signin"
              hrefText="Sign in"
            />
          </Form>
        </Formik>
        {/* <TextInput name="Username" placeholder="Username" />
          <TextInput name="Email" placeholder="Email" />
          <TextInput name="Password" placeholder="Password" />
          <Button text="Sign up" type="submit" variant="primary" className="mt-5" /> */}
      </div>
    </main>
  )
}

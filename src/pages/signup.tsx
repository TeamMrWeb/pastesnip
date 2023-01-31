import { Form, Formik } from "formik"
import * as Yup from "yup"
import Button from "../components/Button"
import { signUpSchema } from "../utils/yupSchemas"
import AccountQuestion from "../components/AccountQuestion"
import { useSignUp } from "@/hooks/useSignUp"
import FormInput from "@/components/FormInput"
import FormStringInput from "@/components/FormStringInput"
import FormPasswordInput from "@/components/FormPasswordInput"

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
            <FormInput name="username">
              <FormStringInput
                type="text"
                name="username"
                label="Username"
                placeholder="juanx209"
              />
            </FormInput>
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
            <Button className="w-full " variant="primary" text="Create Account" type="submit" />
            <AccountQuestion
              question="Already have an account?"
              href="/signin"
              hrefText="Sign in"
            />
          </Form>
        </Formik>
      </div>
    </main>
  )
}

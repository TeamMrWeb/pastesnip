import { useRouter } from "next/router"
import { ValuesProps } from "../../interfaces"
import { CREATE_USER } from "@/graphql/mutations"
import { useApollo } from "@/apollo/useApollo"
import { useEffect } from "react"

export const useSignUp = () => {
  const router = useRouter()
  const {
    lazyMethod: createNewUser,
    error,
    loading,
    data
  } = useApollo({
    gqlType: CREATE_USER,
    successMessage: "Your account has been created successfully"
  })

  useEffect(() => {
    if (!error && !loading && data) router.push("/signin")
  }, [loading])

  const handleSubmit = async (values: ValuesProps) => {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password
    }
    createNewUser({ variables: newUser })
  }

  return { handleSubmit }
}

import { useApollo } from "@/apollo/useApollo"
import { ValuesProps } from "../../interfaces"
import { useRouter } from "next/router"
import { LOGIN_USER } from "@/graphql/mutations"
import { useEffect } from "react"
import { cookies } from "@/utils/Cookies"

export const useSignIn = () => {
  const router = useRouter()
  const {
    lazyMethod: loginUser,
    error,
    loading,
    data
  } = useApollo({
    gqlType: LOGIN_USER
  })

  useEffect(() => {
    if (!error && !loading && data) {
      cookies({ accessToken: data.loginUser.access, refreshToken: data.loginUser.refresh })
      router.push("/")
    }
  }, [loading])

  const handleSubmit = async (values: ValuesProps) => {
    const user = {
      email: values.email,
      password: values.password
    }
    console.log(user)
    loginUser({ variables: user })
  }

  return { handleSubmit }
}

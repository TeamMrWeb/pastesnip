import { useApollo } from "@/apollo/useApollo"
import { ValuesProps } from "../../interfaces"
import { LOGIN_USER, SEND_VERIFICATION_EMAIL } from "@/graphql/mutations"
import { cookies } from "@/utils/Cookies"
import { LOGGED_USER } from "@/graphql/queries"
import { useRouter } from "next/router"

export const useSignIn = () => {
  const router = useRouter()
  const { lazyMethod: loginUser, loginError } = useApollo({
    gqlType: LOGIN_USER
  })
  const {
    lazyMethod: getLoggedUser,
    userError,
    userData
  } = useApollo({
    gqlType: LOGGED_USER
  })
  const { lazyMethod: sendVerificationEmail } = useApollo({
    gqlType: SEND_VERIFICATION_EMAIL,
    successMessage:
      "An email has been sent to your email address. Please verify your account to unlock all the features."
  })

  const handleSubmit = async (values: ValuesProps) => {
    const user = {
      email: values.email,
      password: values.password
    }
    const { data: loginData } = await loginUser({ variables: user })
    cookies({
      accessToken: loginData.loginUser.access,
      refreshToken: loginData.loginUser.refresh
    })
    if (!loginError && loginData) await getLoggedUser()
    if (!userError && !userData?.verified) await sendVerificationEmail()
    router.push("/")
  }

  return { handleSubmit }
}

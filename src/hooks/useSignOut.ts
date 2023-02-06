import { useLoggedUserContext } from "@/contexts/LoggedUserContext"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/router"
import { initializeApollo } from "@/apollo"

export const useSignOut = () => {
  const route = useRouter()
  const { setLoggedUser } = useLoggedUserContext()
  const apolloClient = initializeApollo()

  const signOut = () => {
    deleteCookie("auth")
    deleteCookie("refresh")
    deleteCookie("accessToken")
    deleteCookie("refreshToken")
    apolloClient.clearStore()
    setLoggedUser({})
    route.push("/signin")
  }

  return { signOut }
}

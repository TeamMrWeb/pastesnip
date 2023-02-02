import { deleteCookie } from "cookies-next"
import { useRouter } from "next/router"

export const useSignOut = () => {
  const route = useRouter()
  const signOut = () => {
    deleteCookie("accessToken")
    deleteCookie("refreshToken")
    route.push("/signin")
  }
  return { signOut }
}

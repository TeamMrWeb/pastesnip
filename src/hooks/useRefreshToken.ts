import { REFRESH_TOKEN } from "@/graphql/mutations"
import { useMutation } from "@apollo/client"
import { setCookie } from "cookies-next"
import { useEffect } from "react"
import { useSignOut } from "./useSignOut"

export const useRefreshToken = () => {
  const [refreshToken, { data, loading, error }] = useMutation(REFRESH_TOKEN)
  const { signOut } = useSignOut()
  useEffect(() => {
    if (error?.message === "jwt expired") signOut()
    if (!error && !loading && data) {
      const { access, refresh } = data.refreshUser
      setCookie("accessToken", access)
      setCookie("refreshToken", refresh)
    }
  }, [loading, error, data, signOut])

  const refreshCurrentToken = () => refreshToken()
  return { refreshCurrentToken }
}

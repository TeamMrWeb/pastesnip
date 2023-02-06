import { REFRESH_TOKEN } from "@/graphql/mutations"
import { useMutation } from "@apollo/client"
import { useEffect } from "react"
import { useSignOut } from "./useSignOut"
import { cookies } from "@/utils/cookies"

export const useRefreshToken = () => {
  const [refreshToken, { data, loading, error }] = useMutation(REFRESH_TOKEN)
  const { signOut } = useSignOut()

  useEffect(() => {
    if (error?.message === "jwt expired") signOut()
    if (!error && !loading && data) {
      const { access, refresh } = data.refreshUser
      cookies({ accessToken: access, refreshToken: refresh })
    }
  }, [loading, error, data, signOut])

  const refreshCurrentToken = () => refreshToken()
  return { refreshCurrentToken }
}

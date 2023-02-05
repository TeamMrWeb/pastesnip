import { useTopLoaderContext } from "@/contexts/TopLoaderContext"
import { useRefreshToken } from "@/hooks/useRefreshToken"
import { NotificationFailure, NotificationSuccess } from "@/utils/Notifications"
import { useLazyQuery, useMutation } from "@apollo/client"
import { getCookie } from "cookies-next"

export const useApollo = ({
  gqlType,
  setState,
  successMessage
}: {
  gqlType: any
  setState?: any
  successMessage?: string
}) => {
  const { refreshCurrentToken } = useRefreshToken()
  const { progress, setProgress } = useTopLoaderContext()
  const gqlMethod =
    gqlType.definitions[0].operation === "mutation" ? (useMutation as any) : (useLazyQuery as any)
  setProgress(0)

  const [lazyMethod, { ...props }] = gqlMethod(gqlType, {
    onCompleted: (data: any) => {
      setState && setState(data)
      successMessage && NotificationSuccess(successMessage)
      setProgress(progress + 100)
    },
    onError: (error: any) => {
      console.error(error)
      setProgress(progress + 100)
      if (error.message === "Unauthorized") {
        const refreshToken = getCookie("refreshToken")
        if (refreshToken) refreshCurrentToken()
      }
      return NotificationFailure("An error has occurred while fetching data. Try again later.")
    }
  })

  return { lazyMethod, ...props }
}

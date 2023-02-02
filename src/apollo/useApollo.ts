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
  const gqlMethod =
    gqlType.definitions[0].operation === "mutation" ? (useMutation as any) : (useLazyQuery as any)

  const [lazyMethod, { ...props }] = gqlMethod(gqlType, {
    onCompleted: (data: any) => {
      setState && setState(data)
      successMessage && NotificationSuccess(successMessage)
    },
    onError: (error: any) => {
      console.error(error)
      if (error.message === "Unauthorized") {
        const refreshToken = getCookie("refreshToken")
        if (refreshToken) refreshCurrentToken()
      }
      return NotificationFailure("An error has occurred while fetching data. Try again later.")
    }
  })

  return { lazyMethod, ...props }
}

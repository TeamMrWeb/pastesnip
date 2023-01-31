import { NotificationFailure, NotificationSuccess } from "@/utils/Notifications"
import { useLazyQuery, useMutation } from "@apollo/client"

export const useApollo = ({
  gqlType,
  setState,
  successMessage
}: {
  gqlType: any
  setState?: any
  successMessage?: string
}) => {
  const gqlMethod =
    gqlType.definitions[0].operation === "mutation" ? (useMutation as any) : (useLazyQuery as any)

  const [lazyMethod, { ...props }] = gqlMethod(gqlType, {
    onCompleted: (data: any) => {
      setState && setState(data)
      successMessage && NotificationSuccess(successMessage)
    },
    onError: (error: any) => {
      console.error(error)
      return NotificationFailure("An error has occurred while fetching data")
    }
  })

  return { lazyMethod, ...props }
}

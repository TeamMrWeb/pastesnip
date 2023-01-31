import { NotificationFailure } from "@/utils/Notifications"
import { useLazyQuery, useMutation } from "@apollo/client"

export const useApollo = (gqlType: any, setState?: any) => {
  const gqlMethod =
    gqlType.definitions[0].operation === "mutation" ? (useMutation as any) : (useLazyQuery as any)

  const [lazyMethod, { ...props }] = gqlMethod(gqlType, {
    onCompleted: (data: any) => {
      setState && setState(data)
    },
    onError: (error: any) => {
      console.log(error)
      NotificationFailure("An error has occurred while fetching data")
    }
  })

  return { lazyMethod, ...props }
}

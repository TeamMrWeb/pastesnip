import { NotificationFailure } from "@/utils/Notifications"
import { useLazyQuery, useMutation } from "@apollo/client"

export const useApollo = (gqlType: any, setState: any) => {
  const fetchingMethod =
    gqlType.definitions[0].operation === "mutation" ? (useMutation as any) : (useLazyQuery as any)

  const [lazyQueryMethod, { ...props }] = fetchingMethod(gqlType, {
    onCompleted: (data: any) => {
      setState(data)
    },
    onError: (error: any) => {
      console.log(error)
      NotificationFailure("An error has occurred while fetching data")
    }
  })

  return { lazyQueryMethod, ...props }
}

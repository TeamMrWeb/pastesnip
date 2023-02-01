import { useMemo } from "react"
import { initializeApollo } from "."

export const useApolloInitializer = (initialState: any) =>
  useMemo(() => initializeApollo(initialState), [initialState])

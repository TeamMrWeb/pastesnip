import { createContext, useContext, useState } from "react"

interface LoggedUserContextProps {
  loggedUser: {
    id: string
    username: string
    email: string
    verified: boolean | null
    createdAt: string
  }
  setLoggedUser: (value: any) => void
}

const LoggedUserContext = createContext<LoggedUserContextProps>({
  loggedUser: {
    id: "",
    username: "",
    email: "",
    verified: null,
    createdAt: ""
  },
  setLoggedUser: () => {}
})

const LoggedUserProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedUser, setLoggedUser] = useState({
    id: "",
    username: "",
    email: "",
    verified: null,
    createdAt: ""
  })

  return (
    <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </LoggedUserContext.Provider>
  )
}

const useLoggedUserContext = () => useContext(LoggedUserContext)

export { LoggedUserProvider, useLoggedUserContext }

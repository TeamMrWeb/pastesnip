import { createContext, useContext, useState } from "react"

interface PasteContextProps {
  paste: string
  setPaste: (value: string) => void
}

const PasteContext = createContext<PasteContextProps>({
  paste: "",
  setPaste: () => {}
})

const PasteProvider = ({ children }: { children: React.ReactNode }) => {
  const [paste, setPaste] = useState("")

  return <PasteContext.Provider value={{ paste, setPaste }}>{children}</PasteContext.Provider>
}

const usePasteContext = () => useContext(PasteContext)

export { PasteProvider, usePasteContext }

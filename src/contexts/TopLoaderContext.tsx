import { createContext, useContext, useState } from "react"

interface TopLoaderProps {
  progress: number
  setProgress: (value: number) => void
}

const TopLoaderContext = createContext<TopLoaderProps>({
  progress: 0,
  setProgress: () => {}
})

const TopLoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0)

  return (
    <TopLoaderContext.Provider value={{ progress, setProgress }}>
      {children}
    </TopLoaderContext.Provider>
  )
}

const useTopLoaderContext = () => useContext(TopLoaderContext)

export { TopLoaderProvider, useTopLoaderContext }

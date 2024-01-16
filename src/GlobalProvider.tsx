import { ReactNode, createContext } from "react"

type Props = {
  children: ReactNode
}

type GlobalContextType = {
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalProvider(props: Props) {
  return (
    <GlobalContext.Provider value={{}}>
      { props.children }
    </GlobalContext.Provider>
  )
}
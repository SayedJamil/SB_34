import { createContext, useState } from "react"


export const SoundContext = createContext()

export default function SoundContextProvider({ children }) {
  const [Sound, setSound] = useState(null)
  const [muted, setMuted] = useState(false);
  return <SoundContext.Provider value={{ Sound, setSound, muted, setMuted }}>
    {children}
  </SoundContext.Provider>
}


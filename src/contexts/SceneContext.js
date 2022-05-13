import { createContext, useState, useEffect } from "react"


export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/")
  const [isLoading, setisLoading] = useState(true)
  // state to manage sounds and images for each scene
  const [transition, setTransition] = useState(null);
  const [Assets, setAssets] = useState({})
  const [iteration, setIteration] = useState(1)
  const [jugNum, setJugNum] = useState(1)
  const [BG_sound, setBG_sound] = useState(null);
  const [bubbleNum, setBubbleNum] = useState(0)
  const [disableIcon, setDisableIcon] = useState(0)
  const [enableActivity02, setEnableActivity02] = useState(false)
  const [act02array, setAct02Array] = useState([])
  const [act01array, setAct01Array] = useState([])
  const [height, setheight] = useState("73%")
  const [Ipad, setIpad] = useState(false)
  const [LandScape, setLandScape] = useState(false)
  // loading part

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setisLoading(false)
      }, 3200)//change time here to 3000
    }
  }, [isLoading])
  if (act01array.length > 9) {
    setAct01Array([])
  }
  return (
    <SceneContext.Provider value={{ LandScape, setLandScape, SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, transition, setTransition, setIteration, iteration, jugNum, setJugNum, bubbleNum, setBubbleNum, disableIcon, setDisableIcon, enableActivity02, setEnableActivity02, act02array, setAct02Array, act01array, setAct01Array, BG_sound, setBG_sound, height, setheight, Ipad, setIpad }}>
      {children}
    </SceneContext.Provider>
  )
}

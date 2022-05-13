import { Howl } from 'howler';
import lottie from 'lottie-web';
import { useContext, useEffect, useState, Fragment, useRef } from 'react'
import { SceneContext } from '../contexts/SceneContext'
import "../styles/app.css"
// import apple from "./apple.svg"

export default function Scenes({ sprites, Bg = "" }) {
  const { setSceneId, setisLoading, isLoading, transition, setTransition, Ipad, setIpad
  } = useContext(SceneContext)

  const containerRef2 = useRef(null);


  useEffect(() => {
    if (transition && containerRef2.current && isLoading) {
      const ch = lottie.loadAnimation({
        name: "placeholder",
        container: containerRef2.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: transition,
      });
      ch.setSpeed(0.75)
    }
  }, [transition, isLoading]);


  return (
    <div id="vision">
      {Bg !== "" && <img
        className="Bg_Image"
        id="vision"
        alt="background"
        style={{ transform: Ipad ? "scale(1.5)" : "" }}
        src={`data:image/svg+xml;utf8,${encodeURIComponent(Bg)}`} />}


      <div
        className="transition_style"
        ref={containerRef2}
        id='placeholder'
        style={{
          opacity: isLoading ? 1 : 0,
          zIndex: isLoading ? 100 : 0,
          width: "200%",
          top: "50%",
          position: 'fixed',
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: "black"
        }}
      ></div>

      {sprites}
    </div>
  )
}

//comp remove cap in activity
//hover effect

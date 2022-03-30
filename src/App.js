// import { useState, useEffect, useContext } from "react"
import { Howl } from 'howler';
import { useContext, useEffect, useState } from 'react';
import { SceneContext } from './contexts/SceneContext';
import Activity01 from './scenes/Activity01';
import Activity01End from './scenes/Activity01End';
import Activity02 from './scenes/Activity02';
import Activity02End from './scenes/Activity02End';
import End from './scenes/End';
import Explain from './scenes/Explain';
import Intro from './scenes/Intro';
import SaveWater from './scenes/SaveWater';
import SaveWaterEnd from './scenes/SaveWaterEnd';
import WaterUses from './scenes/WaterUses';
import './styles/app.css'
import Image from './utils/elements/Image';
import GameContainer from './utils/GameContainer';
import { LoadImage } from './utils/loadImage';
import { LoadJson } from './utils/loadJson';
import Router from './utils/Router';

function App() {
  const [soundButton, setSoundButton] = useState(null);
  const [noSoundButton, setNoSoundButton] = useState(null);
  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);

  const { setTransition, BG_sound, setBG_sound } = useContext(SceneContext);

  const loadBgImage = async () => {
    const unmute = await LoadImage(`ee02_ow_tvhd_pl1/button/buttons_20.svg`);
    const mute = await LoadImage(`ee02_ow_tvhd_pl1/button/buttons_26.svg`);
    setSoundButton(unmute);
    setNoSoundButton(mute);
  };
  const loadAudio = () => {
    const bg_sound = new Howl({
      src: [`ee02_ow_tvhd_pl1/audio/entire_video_song.mp3`],
      loop: true,
      volume: 0.05,
      autoplay: false
    })
    setBG_sound(bg_sound)
  }
  const loadLottie = async () => {
    const data = await LoadJson(`ee02_ow_tvhd_pl1/lottie/water_filling_animation.json`);
    setTransition(data);
  };

  useEffect(() => {
    if (BG_sound !== null) {
      BG_sound.volume(0.05)
    }
  }, [BG_sound])

  useEffect(() => {
    if (BG_sound) {
      if (mute) {
        BG_sound?.mute(true)
      } else {
        BG_sound?.mute(false)
      }
    }
  }, [mute])

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 4000)
    loadBgImage()
    loadAudio()
    loadLottie()
  }, []);

  if (Load) return (
    <div class="circle">
      <div class="wave"></div>
    </div>
  )

  const toggleMute = () => {
    setmute(!mute)
    navigator.vibrate(100);
  }
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  return (
    <GameContainer>
      {
        mute
          ?
          <Image src={noSoundButton} alt="" className="music_button" onClick={toggleMute} />
          :
          <Image src={soundButton} alt="" className="music_button" onClick={toggleMute} />
      }
      <Router sceneId="/">
        <Intro />
      </Router>
      <Router sceneId="/explain">
        <Explain />
      </Router>
      <Router sceneId="/activity011">
        <Activity01 />
      </Router>
      <Router sceneId="/activity012">
        <Activity01 />
      </Router>
      <Router sceneId="/activity01end">
        <Activity01End />
      </Router>
      <Router sceneId="/activity02end">
        <Activity02End />
      </Router>
      <Router sceneId="/wateruses01">
        <WaterUses />
      </Router>
      <Router sceneId="/wateruses02">
        <WaterUses />
      </Router>
      <Router sceneId="/activity021">
        <Activity02 />
      </Router>
      <Router sceneId="/activity022">
        <Activity02 />
      </Router>
      <Router sceneId="/savewater01">
        <SaveWater />
      </Router>
      <Router sceneId="/savewater02">
        <SaveWater />
      </Router>
      <Router sceneId="/savewaterend">
        <SaveWaterEnd />
      </Router>
      <Router sceneId="/end">
        <End />
      </Router>
    </GameContainer>
  );
}

export default App;

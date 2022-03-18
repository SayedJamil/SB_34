import { Howl } from 'howler';
import React, { useContext, useEffect, useState } from 'react'
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/wateruse.css'
function SaveWater() {
  const { Bg, Loading } = useLoadAsset(AssetsMap.saveWater)
  const { setSceneId, Assets, setisLoading, iteration, setIteration, isLoading, bubbleNum, setBubbleNum, disableIcon, setDisableIcon, setEnableActivity02 } = useContext(SceneContext);
  const { savewaterscene } = Assets;
  var audioNum = String(bubbleNum)
  console.log(audioNum)
  const sound = new Howl({
    src: [`ee02_ow_tvhd_pl1/audio/usesaudio/sb_34_audio_${audioNum}.mp3`],
    autoplay: false,
  });
  const [playSound, setPlaySound] = useState(sound)
  const [iconsSetNum, setIconsSetNum] = useState(12)
  console.log(audioNum)
  useEffect(() => {
    if (!isLoading) {
      playSound.play()
    }
    if (bubbleNum >= 6) { setIconsSetNum(18) }
  }, [isLoading])

  useEffect(() => {
    playSound.on('end', () => {

      if (bubbleNum == 11) {
        setTimeout(() => {
          setBubbleNum(bubbleNum + 1)
        }, 3000)
      } else {
        setBubbleNum(bubbleNum + 1)
      }
      setDisableIcon(disableIcon + 1)
      if (bubbleNum == 11) {
        setTimeout(() => {
          setisLoading(true)
          setEnableActivity02(true)
          setSceneId('/savewaterend')
          setBubbleNum(0)
        }, 3000)

      } else {
        if (bubbleNum % 2 == 0) {
          playSound.stop()
          setisLoading(true)
          setSceneId('/savewater02')
        } else {
          playSound.stop()
          setisLoading(true)
          setSceneId('/savewater01')
        }
      }

    })

  }, [bubbleNum])

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          <Image src={savewaterscene?.sprites[bubbleNum + 12]} alt="" className="waterUsesBigIcon" />
          <Image src={savewaterscene?.sprites[bubbleNum]} alt="" className="waterUsesBigText" />
          <div className='waterUsesBottom'>
            {
              (disableIcon >= 1)
                ? <Image src={savewaterscene?.sprites[iconsSetNum + 12]} alt="" className="waterUsesSmallIcon" />
                : <Image src={savewaterscene?.sprites[iconsSetNum]} alt="" className="waterUsesSmallIcon" />
            }
            {
              (disableIcon >= 2)
                ? <Image src={savewaterscene?.sprites[iconsSetNum + 13]} alt="" className="waterUsesSmallIcon" />
                : <Image src={savewaterscene?.sprites[iconsSetNum + 1]} alt="" className="waterUsesSmallIcon" />
            }
            {
              (disableIcon >= 3)
                ? <Image src={savewaterscene?.sprites[iconsSetNum + 14]} alt="" className="waterUsesSmallIcon" />
                : <Image src={savewaterscene?.sprites[iconsSetNum + 2]} alt="" className="waterUsesSmallIcon" />
            }
            {
              (disableIcon >= 4)
                ? <Image src={savewaterscene?.sprites[iconsSetNum + 15]} alt="" className="waterUsesSmallIcon" />
                : <Image src={savewaterscene?.sprites[iconsSetNum + 3]} alt="" className="waterUsesSmallIcon" />
            }
            {
              (disableIcon >= 5)
                ? <Image src={savewaterscene?.sprites[iconsSetNum + 16]} alt="" className="waterUsesSmallIcon" />
                : <Image src={savewaterscene?.sprites[iconsSetNum + 4]} alt="" className="waterUsesSmallIcon" />
            }
            {
              (disableIcon >= 6)
                ? <Image src={savewaterscene?.sprites[iconsSetNum + 17]} alt="" className="waterUsesSmallIcon" />
                : <Image src={savewaterscene?.sprites[iconsSetNum + 5]} alt="" className="waterUsesSmallIcon" />
            }

          </div>


        </>

      }
    />

  );
}

export default SaveWater
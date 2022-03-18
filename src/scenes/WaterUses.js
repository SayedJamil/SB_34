import { Howl } from 'howler';
import React, { useContext, useEffect, useState } from 'react'
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/wateruse.css'
function WaterUses() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.waterUses)
    const { setSceneId, Assets, setisLoading, iteration, setIteration, isLoading, bubbleNum, setBubbleNum, disableIcon, setDisableIcon, setEnableActivity02, act01array } = useContext(SceneContext);
    const { waterusescene } = Assets;
    var audioNum = String(bubbleNum)
    console.log(audioNum)
    const sound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/usesaudio/sb_34_audio_${audioNum}.mp3`],
        autoplay: false,
    });
    const [playSound, setPlaySound] = useState(sound)
    const [iconsSetNum, setIconsSetNum] = useState(12)

    useEffect(() => {

        if (!isLoading) {
            playSound.play()
        }
        if (bubbleNum >= 6) { setIconsSetNum(18) }
    }, [isLoading])

    useEffect(() => {
        playSound.on('end', () => {
            if (bubbleNum == 5) {
                setTimeout(() => {
                    setBubbleNum(bubbleNum + 1)
                }, 3000)
            } else {
                setBubbleNum(bubbleNum + 1)
            }

            setDisableIcon(disableIcon + 1)
            if (bubbleNum == 5) {
                setTimeout(() => {
                    setisLoading(true)
                    setEnableActivity02(true)
                    setSceneId('/activity01end')
                    act01array.pop()
                    setBubbleNum(0)
                    setDisableIcon(0)
                }, 3000)

            } else {
                if (bubbleNum % 2 == 0) {
                    playSound.stop()
                    setisLoading(true)
                    setSceneId('/wateruses02')
                } else {
                    playSound.stop()
                    setisLoading(true)
                    setSceneId('/wateruses01')
                }
            }

        })

    }, [bubbleNum])

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    <Image src={waterusescene?.sprites[bubbleNum + 12]} alt="" className="waterUsesBigIcon" />
                    <Image src={waterusescene?.sprites[bubbleNum]} alt="" className="waterUsesBigText" />
                    <div className='waterUsesBottom'>
                        {
                            (disableIcon >= 1)
                                ? <Image src={waterusescene?.sprites[iconsSetNum + 12]} alt="" className="waterUsesSmallIcon" />
                                : <Image src={waterusescene?.sprites[iconsSetNum]} alt="" className="waterUsesSmallIcon" />
                        }
                        {
                            (disableIcon >= 2)
                                ? <Image src={waterusescene?.sprites[iconsSetNum + 13]} alt="" className="waterUsesSmallIcon" />
                                : <Image src={waterusescene?.sprites[iconsSetNum + 1]} alt="" className="waterUsesSmallIcon" />
                        }
                        {
                            (disableIcon >= 3)
                                ? <Image src={waterusescene?.sprites[iconsSetNum + 14]} alt="" className="waterUsesSmallIcon" />
                                : <Image src={waterusescene?.sprites[iconsSetNum + 2]} alt="" className="waterUsesSmallIcon" />
                        }
                        {
                            (disableIcon >= 4)
                                ? <Image src={waterusescene?.sprites[iconsSetNum + 15]} alt="" className="waterUsesSmallIcon" />
                                : <Image src={waterusescene?.sprites[iconsSetNum + 3]} alt="" className="waterUsesSmallIcon" />
                        }
                        {
                            (disableIcon >= 5)
                                ? <Image src={waterusescene?.sprites[iconsSetNum + 16]} alt="" className="waterUsesSmallIcon" />
                                : <Image src={waterusescene?.sprites[iconsSetNum + 4]} alt="" className="waterUsesSmallIcon" />
                        }
                        {
                            (disableIcon >= 6)
                                ? <Image src={waterusescene?.sprites[iconsSetNum + 17]} alt="" className="waterUsesSmallIcon" />
                                : <Image src={waterusescene?.sprites[iconsSetNum + 5]} alt="" className="waterUsesSmallIcon" />
                        }

                    </div>


                </>

            }
        />

    );
}

export default WaterUses
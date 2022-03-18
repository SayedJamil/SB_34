import React, { useContext, useEffect, useRef, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset'
import '../styles/intro.css'
import { Howl } from 'howler';
import lottie from 'lottie-web';

function End() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.end)
    const { setSceneId, Assets, setisLoading, setAct02Array, setIteration, isLoading, setBubbleNum, setDisableIcon, setEnableActivity02, setJugNum, BG_sound } = useContext(SceneContext);
    const { endscene } = Assets;
    const Ref20 = useRef(null);
    const sound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/sb_34_audio_07.mp3`],
    });
    const welldonesound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/children_clapping.mp3`],
    });
    const endSound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/replayaudio.mp3`],
    });
    // SB_34_Audio_26
    const [playSound, setPlaySound] = useState(sound)
    const [playWellDone, setPlayWellDone] = useState(welldonesound)
    const [playEndSound, setPlayEndSound] = useState(endSound)
    const [click, setClick] = useState(false)
    useEffect(() => {
        if (!isLoading) {
            playSound.play()
        }

        playSound.on('end', () => {
            playWellDone.play()
        })
        playWellDone.on('end', () => {
            playEndSound.play()
            setClick(true)
        })
        playEndSound.on('end', () => {
            navigator.vibrate(300);
        })
    }, [isLoading])
    useEffect(() => {
        if (endscene?.lottie && Ref20.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "welldoneAnim",
                    container: Ref20.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: endscene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }

    }, [Assets, Loading])

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div>
                    <Image src={endscene?.sprites[0]} alt="" className="replay_btn"
                        onClick={() => {
                            if (click) {
                                playEndSound.unload()
                                setisLoading(true)
                                setEnableActivity02(false)
                                setAct02Array([])
                                setBubbleNum(0)
                                setDisableIcon(0)
                                setJugNum(1)
                                setIteration(1)
                                BG_sound.stop()
                                setSceneId('/')//change scenes here
                            }
                        }
                        } />
                    <div ref={Ref20} className="wellDoneAnim" id="welldoneAnim"></div>
                </div>
            }
        />

    )
}

export default End
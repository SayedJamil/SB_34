import React, { useContext, useEffect, useRef, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset'
import '../styles/intro.css'
import { Howl } from 'howler';
import lottie from 'lottie-web';

function SaveWaterEnd() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.savewaterend)
    const { setSceneId, Assets, setisLoading, setAct02Array, setIteration, isLoading } = useContext(SceneContext);
    const { swendscene } = Assets;
    const Ref22 = useRef(null);
    const sound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/sb_34_audio_26.mp3`],
    });
    // SB_34_Audio_26
    const [playSound, setPlaySound] = useState(sound)
    const remembersound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/sb_34_audio_17.mp3`],
        autoplay: false,
    });
    const [playRemSound, setPlayRemSound] = useState(remembersound)
    const [click, setClick] = useState(false)
    useEffect(() => {
        if (!isLoading) {
            playSound.play()
        }
        playSound.on('play', () => {
            lottie.play()
        })
        playSound.on('end', () => {
            lottie.pause()
            playRemSound.play()
        })
        playRemSound.on('play', () => {
            lottie.play()
        })
        playRemSound.on('end', () => {
            setisLoading(true)
            lottie.pause()
            setSceneId('/end')
        })
    }, [isLoading])
    useEffect(() => {
        if (swendscene?.lottie && Ref22.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "saveWaterEndLady",
                    container: Ref22.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: false,
                    animationData: swendscene?.lottie[1],
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
                    <div ref={Ref22} className="saveWaterEndLady" id="saveWaterEndLady"></div>
                </div>
            }
        />

    )
}

export default SaveWaterEnd
import React, { useContext, useEffect, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset'
import '../styles/intro.css'
import { Howl } from 'howler';

function Intro() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.intro)
    const { setSceneId, Assets, setisLoading, setAct02Array, setIteration, BG_sound, setEnableActivity02 } = useContext(SceneContext);
    const { intro } = Assets;
    const sound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/sb_34_audio_01.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)
    const [buttonPressed, setButtonPressed] = useState(false)
    useEffect(() => {
        var changeClass = document.querySelector('.music_button')
        changeClass.style.display = 'none'
    }, [])
    console.log(BG_sound)
    const handleIntroButton = () => {
        BG_sound?.play()
        setButtonPressed(true)
        setIteration(1)
        navigator.vibrate(100)
        playSound.play()
        playSound.on('end', () => {
            setTimeout(() => {
                playSound.unload()
                setisLoading(true)
                setSceneId('/explain')
                // setEnableActivity02(true)
                // setSceneId('/activity01end')
            }, 1000)
        })
    }
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='introScreen'>
                    <Image src={intro?.sprites[0]} alt="" className="introTitle" />
                    <Image src={intro?.sprites[1]} alt="" className="introTitleBG" />
                    <Image src={intro?.sprites[2]} alt="" className={`play_btn ${(buttonPressed) ? 'disappearButton' : null}`}
                        onClick={() => {
                            handleIntroButton()
                        }
                        } />
                </div>
            }
        />

    )
}

export default Intro;

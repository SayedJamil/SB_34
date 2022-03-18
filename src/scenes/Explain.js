import React, { useContext, useEffect, useRef, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/explain.css'
import { Howl } from 'howler';
import lottie from 'lottie-web';

function Explain() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.explain)
    const { setSceneId, Assets, setisLoading, isLoading } = useContext(SceneContext);
    const { explain } = Assets;
    const Ref1 = useRef(null);
    const sound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/sb_34_audio_02.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        var changeClass = document.querySelector('.music_button')
        changeClass.style.display = 'block'
        if (!isLoading) {
            playSound.play()
        }
        playSound.on('end', () => {
            setisLoading(true)
            setSceneId('/activity011')
        })
    }, [isLoading])

    useEffect(() => {
        if (explain?.lottie && Ref1.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "explainSceneLady",
                    container: Ref1.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: explain?.lottie[0],
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
                <div className='introScreen'>
                    <Image src={explain?.sprites[2]} alt=""
                        className='next_btn'
                        onClick={() => {
                            playSound.stop()
                            setisLoading(true)
                            setSceneId('/activity011')//change scenes here
                        }
                        } />
                    <div ref={Ref1} className="explainLady" id="explainSceneLady"></div>
                </div>
            }
        />
    );
}

export default Explain;

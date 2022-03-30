import { Howl } from 'howler';
import React, { useContext, useEffect, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/activity.css'
function Activity01() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity01)
    const { setSceneId, Assets, setisLoading, iteration, setIteration, isLoading, jugNum, setJugNum, act01array, setAct01Array } = useContext(SceneContext);
    const { activitytype01 } = Assets;
    const [cl1, setCL1] = useState('')
    const [cl2, setCL2] = useState('')
    const [cl3, setCL3] = useState('')
    const [hW, sethW] = useState()
    const [hNw01, sethNw01] = useState()
    const [hNw02, sethNw02] = useState()
    const [correctHL, setCorrectHL] = useState(false)
    const [wrongHL01, setwrongHL01] = useState(false)
    const [wrongHL02, setwrongHL02] = useState(false)
    const [click, setClick] = useState(true)
    const [enablePointer, setEnablePointer] = useState(true)
    const [rightSide, setRightSide] = useState('')
    const [wrongSide, setWrongSide] = useState('')
    const sound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/sb_34_audio_05.mp3`],
        autoplay: false,
    });
    var stringImage = activitytype01?.sprites[hNw01]
    const [playSound, setPlaySound] = useState(sound)
    useEffect(() => {
        if (!isLoading) {
            playSound.play()
        }
        playSound.on('end', () => {
            setTimeout(() => {
                playSound.play()
            }, 10000)
        })
        playSound.on('mute', () => {
            setTimeout(() => {
                playSound.mute(false)
            }, 3200)
        })
        playSound.on('stop', () => {
            setTimeout(() => {
                playSound.stop()
                playSound.mute()
            }, 2000)
        })
        if (act01array.length > 9) {
            setAct01Array([])
            setSceneId('/activity01end')
            // setIteration(1)
        }
    }, [isLoading])
    useEffect(() => {
        randomize()

    }, [])
    useEffect(() => {
        if (iteration > 5) {
            setisLoading(true)
            playSound.unload()
            setSceneId('/activity01end')
            // setIteration(1)
            // setJugNum(1)
        }
    }, [iteration])

    const randomize = () => {
        var classnames = ['leftHexagonIcon', 'rightHexagonIcon', 'centerHexagonIcon'];
        var random1 = classnames[Math.floor(Math.random() * classnames.length)];
        var removedclassname1 = classnames.filter(item => item !== random1)
        var random2 = removedclassname1[Math.floor(Math.random() * removedclassname1.length)];
        var removedclassname2 = removedclassname1.filter(item => item !== random2)
        var random3 = removedclassname2[Math.floor(Math.random() * removedclassname2.length)];
        setCL1(random1)
        setCL2(random2)
        setCL3(random3)

        var random4 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        var findNum = act01array.find(elem => elem == random4)
        if (findNum == null) {
            setAct01Array([...act01array, random4]);
            sethW(random4)
        } else { randomize() }


        var random5 = Math.floor(Math.random() * (19 - 10 + 1)) + 10;
        var random6 = Math.floor(Math.random() * (19 - 10 + 1)) + 10;
        while (random6 === random5) {
            random6 = Math.floor(Math.random() * (19 - 10 + 1)) + 10;
        }
        sethNw01(random5)
        sethNw02(random6)

    }
    useEffect(() => {
        setRightSide(cl1)
        console.log(rightSide)
    }, [cl1])
    const rightAnswerClicked = () => {
        playSound.unload()
        navigator.vibrate(100);
        setClick(false)
        var rightsfx = new Howl({
            src: [`ee02_ow_tvhd_pl1/audio/correct_answer.mp3`],//change here
        });
        rightsfx.play();
        var rightsound = new Howl({
            src: [`ee02_ow_tvhd_pl1/audio/sb_34_audio_06.mp3`],//change here
        });
        rightsfx.on('end', () => {
            rightsound.play();
        });
        rightsound.on('end', () => {
            setIteration(iteration + 1)
            setCorrectHL(false)
            if (iteration > 5) {
                setisLoading(true)
                setSceneId('/activity01end')
            } else
                if (iteration % 2 == 0) {
                    playSound.stop()
                    setSceneId('/activity011')
                } else {
                    playSound.stop()
                    setSceneId('/activity012')
                }
        })
        setJugNum(jugNum + 1)

    }

    const wrongAnswerClicked = () => {
        playSound.mute(true)
        navigator.vibrate(250);
        setClick(false)
        var wrongSfx = new Howl({
            src: [`ee02_ow_tvhd_pl1/audio/wrong_answer.mp3`],//change here
        });
        wrongSfx.play()
        var wrongSound = new Howl({
            src: [`ee02_ow_tvhd_pl1/audio/sb_34_audio_04.mp3`],//change here
        });
        wrongSfx.on('end', () => {
            wrongSound.play();
        })
        wrongSound.on('end', () => {
            setClick(true)
            setwrongHL01(false)
            setwrongHL02(false)
            setClick(true)
        })
    }
    console.log(rightSide)
    const handleAnswer = (value) => {
        console.log(value)
        if (value === cl1) {
            setCorrectHL(true)
            rightAnswerClicked()
        }
        else {
            if (value === cl2) {
                setwrongHL01(true)
                wrongAnswerClicked()
            } else if (value === cl3) {
                setwrongHL02(true)
                wrongAnswerClicked()
            }

        }
    }
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='activitytype01Screen'>

                    <Image src={activitytype01?.sprites[hW]} alt="" className={`${cl1} ${(enablePointer) ? 'cursorPointer' : ''}`} />
                    {(correctHL) ? <Image src={activitytype01?.sprites[20]} alt="" className={`highlighterAnim ${cl1} `} /> : null}

                    <Image src={activitytype01?.sprites[hNw01]} alt="" className={`${cl2} ${(enablePointer) ? 'cursorPointer' : ''}`}
                    />
                    {(wrongHL01) ? <Image src={activitytype01?.sprites[21]} alt="" className={`highlighterAnim ${cl2}`} /> : null}
                    <div className='clickAbleDots clickAbleDotsLeft' onClick={() => { if (click) { handleAnswer("leftHexagonIcon") } }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='clickAbleDots clickAbleDotsRight' onClick={() => {
                        if (click) {
                            handleAnswer('rightHexagonIcon')
                        }
                    }
                    }
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='clickAbleDots clickAbleDotsCenter' onClick={() => { if (click) { handleAnswer('centerHexagonIcon') } }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Image src={activitytype01?.sprites[hNw02]} alt="" className={`${cl3} ${(enablePointer) ? 'cursorPointer' : ''}`}
                    />
                    {(wrongHL02) ? <Image src={activitytype01?.sprites[21]} alt="" className={`highlighterAnim ${cl3}`} /> : null}
                    {
                        (() => {
                            switch (jugNum) {
                                case 1:
                                    return <Image src={activitytype01?.sprites[22]} alt="" className="jugIcon" />
                                case 2:
                                    return <Image src={activitytype01?.sprites[23]} alt="" className="jugIcon" />
                                case 3:
                                    return <Image src={activitytype01?.sprites[24]} alt="" className="jugIcon" />
                                case 4:
                                    return <Image src={activitytype01?.sprites[25]} alt="" className="jugIcon" />
                                case 5:
                                    return <Image src={activitytype01?.sprites[26]} alt="" className="jugIcon" />
                                case 6:
                                    return <Image src={activitytype01?.sprites[27]} alt="" className="jugIcon" />
                                default:
                                    return null
                            }
                        })()
                    }

                </div >
            }
        />

    );


}

export default Activity01;

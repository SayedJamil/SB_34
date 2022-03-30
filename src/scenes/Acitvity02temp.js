import React, { useContext, useEffect, useState } from 'react'
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/activity.css'
import { Howl } from 'howler';


function Activity02Temp() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity02)
    const { setSceneId, Assets, setisLoading, iteration, setIteration, isLoading, jugNum, setJugNum, enableActivity02, act02array, setAct02Array, bubbleNum, setBubbleNum } = useContext(SceneContext);
    const { activitytype02 } = Assets;
    const [correctOptionSide, setCorrectOptionSide] = useState('')

    const [iconNum, setIconNum] = useState()
    const [leftCorrectHL, setLeftCorrectHL] = useState(false)
    const [leftWrongHL, setLeftWrongHL] = useState(false)
    const [rightCorrectHL, setRightCorrectHL] = useState(false)
    const [rightWrongHL, setRightWrongHL] = useState(false)
    const [click, setClick] = useState(true)
    const [enablePointer, setEnablePointer] = useState(false)

    const sound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/sb_34_audio_20.mp3`],
        autoplay: false,
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        if (act02array.length === 7) {
            setisLoading(true)
            playSound.unload()
            setSceneId('/activity02end')
        }
        if (!isLoading) {
            playSound.play()
            randomize()
        }
        playSound.on('end', () => {
            setEnablePointer(true)
            setTimeout(() => {
                playSound.play()
            }, 10000)
        })
        playSound.on('mute', () => {
            setTimeout(() => {
                playSound.mute(false)
            }, 2000)
        })
        playSound.on('stop', () => {
            setTimeout(() => {
                playSound.stop()
                playSound.mute()
            }, 2000)
        })
    }, [isLoading])

    const randomize = () => {
        var randomNumber = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
        if (randomNumber % 2 != 0) {
            randomize()
        } else {
            var findNum = act02array.find(elem => elem == randomNumber);
            if (findNum == null) {
                setIconNum(randomNumber)
                setBubbleNum(randomNumber)
                if (randomNumber == 0) {
                    setCorrectOptionSide('Left')
                } else if (randomNumber == 2) {
                    setCorrectOptionSide('Left')
                } else if (randomNumber == 4) {
                    setCorrectOptionSide('Left')
                } else {
                    setCorrectOptionSide('Right')
                }
                setAct02Array([...act02array, randomNumber]);
            } else {
                randomize()
            }
        }
    }
    const handleButtonClick = (sideClicked) => {
        if (click) {
            if (correctOptionSide === 'Left' && sideClicked === 'Left') {
                setLeftCorrectHL(true)
                rightAnswerClicked()
            }
            if (correctOptionSide === 'Left' && sideClicked === 'Right') {
                setRightWrongHL(true)
                wrongAnswerClicked()
            }
            if (correctOptionSide === 'Right' && sideClicked === 'Left') {
                setLeftWrongHL(true)
                wrongAnswerClicked()
            }
            if (correctOptionSide === 'Right' && sideClicked === 'Right') {
                setRightCorrectHL(true)
                rightAnswerClicked()
            }
        }

    }
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
            setTimeout(() => {
                setIteration(iteration + 1)
            }, 3000)
            if (act02array.length === 7) {
                setisLoading(true)
                playSound.unload()
                setSceneId('/activity02end')
            } else
                if (iteration % 2 == 0) {
                    playSound.unload()
                    setSceneId('/activity021')
                } else {
                    playSound.unload()
                    setSceneId('/activity022')
                }
            setClick(true)
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
            setLeftWrongHL(false)
            setRightWrongHL(false)
        })

    }

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='activitytype02Screen'>
                    <Image src={activitytype02?.sprites[iconNum]} alt=""
                        className={`leftSquareIcon ${(enablePointer) ? 'cursorPointer' : ''}`}
                        onClick={() => {
                            handleButtonClick('Left')
                        }} />
                    {/* <Image src={activitytype02?.sprites[14]} alt="" className="leftSquareIcon" /> */}
                    {(leftCorrectHL) ? <Image src={activitytype02?.sprites[14]} alt="" className="leftSquareIcon highlighterAnim" /> : null}
                    {(leftWrongHL) ? <Image src={activitytype02?.sprites[15]} alt="" className="leftSquareIcon highlighterAnim" /> : null}

                    <Image src={activitytype02?.sprites[iconNum + 1]} alt=""
                        className={`rightSquareIcon ${(enablePointer) ? 'cursorPointer' : ''}`}
                        onClick={() => {
                            handleButtonClick('Right')
                        }} />

                    {/* <Image src={activitytype02?.sprites[16]} alt="" className="rightSquareIcon" /> */}
                    {(rightCorrectHL) ? <Image src={activitytype02?.sprites[16]} alt="" className="rightSquareIcon highlighterAnim" /> : null}
                    {(rightWrongHL) ? <Image src={activitytype02?.sprites[17]} alt="" className="rightSquareIcon highlighterAnim" /> : null}

                    <Image src={activitytype02?.sprites[26]} alt="" className="circleSquareIcon" />
                    {(() => {
                        switch (jugNum) {
                            case 1:
                                return <Image src={activitytype02?.sprites[18]} alt="" className="squareJugIcon" />
                            case 2:
                                return <Image src={activitytype02?.sprites[19]} alt="" className="squareJugIcon" />
                            case 3:
                                return <Image src={activitytype02?.sprites[20]} alt="" className="squareJugIcon" />
                            case 4:
                                return <Image src={activitytype02?.sprites[21]} alt="" className="squareJugIcon" />
                            case 5:
                                return <Image src={activitytype02?.sprites[22]} alt="" className="squareJugIcon" />
                            case 6:
                                return <Image src={activitytype02?.sprites[23]} alt="" className="squareJugIcon" />
                            case 7:
                                return <Image src={activitytype02?.sprites[24]} alt="" className="squareJugIcon" />
                            case 8:
                                return <Image src={activitytype02?.sprites[25]} alt="" className="squareJugIcon" />
                            default:
                                return null
                        }
                    })()}

                </div>
            }
        />

    );
}
export default Activity02Temp;
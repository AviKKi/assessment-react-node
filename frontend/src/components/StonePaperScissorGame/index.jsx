import EmojiButton from './EmojiButton'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { useState } from 'react'
import Confetti from 'react-dom-confetti'
import useTimeout from '@rooks/use-timeout'

import EmojiCard from './EmojiCard'

const ControllsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint('md')`
        flex-direction: row;
    `}
`

const ScoresWrapper = styled.div`
  font-size: 32px;
  color: #222;
`
const confettiConfig = {
  angle: 90,
  spread: '120',
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
}

const StonePaperScissorGame = () => {
  const [scoreYou, setScoreYou] = useState(0)
  const [scoreCPU, setScoreCPU] = useState(0)
  const [CPUMove, setCPUMove] = useState(-1)
  const [loading, setLoading] = useState(false)
  const [confettiState, setConfettiState] = useState(false)

  const increaseYouScore = () => {
    setScoreYou(scoreYou + 1)
    setConfettiState(true)
  }
  
  const increaseCPUScore = () => {
    setScoreCPU(scoreCPU + 1)
    setConfettiState(false)
  }

  // use a timer to hide card after 1.5s
  const onTimer = () => {
    setLoading(false)
    setCPUMove(-1)
    setConfettiState(false)
  }
  const timer = useTimeout(onTimer, 1500)

  const moveHandler = choice => async () => {
    if (loading) return
    setLoading(true)
    
    // const randomNumber = Math.floor(Math.random() * 3)
    const res = await fetch('http://localhost:3600/stonePaperScissor/')
    const randomNumber = (await res.json()).number
    setCPUMove(randomNumber)

    if (randomNumber === 0) {
      if (choice === 1) increaseYouScore()
      if (choice === 2) increaseCPUScore()
    } else if (randomNumber === 1) {
      if (choice === 2) increaseYouScore()
      if (choice === 0) increaseCPUScore()
    } else {
      if (choice === 0) increaseYouScore()
      if (choice === 1) increaseCPUScore()
    }
    timer.start()
  }

  return (
    <>
      <ScoresWrapper>
        You: {scoreYou} AI: {scoreCPU}
      </ScoresWrapper>
      <EmojiCard state={CPUMove} />
      <Confetti active={confettiState} config={confettiConfig} />
      <ControllsWrapper>
        <EmojiButton onClick={moveHandler(0)} src='raised-fist.png' />
        <EmojiButton onClick={moveHandler(1)} src='raised-hand.png' />
        <EmojiButton onClick={moveHandler(2)} src='victory-hand.png' />
      </ControllsWrapper>
    </>
  )
}

export default StonePaperScissorGame

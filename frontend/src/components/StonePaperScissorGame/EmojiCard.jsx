import styled from 'styled-components'
import { rgba } from 'polished'

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  margin: 15px;
  transition: all 0.3s;
  transform: perspective(1000px)
    rotateY(${props => (props.state === -1 ? '0deg' : '180deg')});
`

const EmojiImg = styled.img`
  width: 100px;
  backface-visibility: hidden;
  transition: all 0.3s;
  transform: perspective(1000px)
    rotateY(${props => (props.state !== -1 ? '0deg' : '-180deg')})
    rotateZ(180deg);
`

const Text = styled.h1`
  color: ${props => rgba(props.theme.colors.primary, 0.8)};
  position: absolute;
  top: 5px;
  left: 15;
  backface-visibility: hidden;
  transition: all 0.3s;
  transform: perspective(1000px)
    rotateY(${props => (props.state === -1 ? '0deg' : '180deg')});
`

const StateToEmoji = {
  0: 'raised-fist.png',
  1: 'raised-hand.png',
  2: 'victory-hand.png'
}

const EmojiCard = props => {
  return (
    <Wrapper state={props.state}>
      <EmojiImg src={StateToEmoji[props.state]} {...props} />
      <Text state={props.state}>CPU's move</Text>
    </Wrapper>
  )
}

export default EmojiCard

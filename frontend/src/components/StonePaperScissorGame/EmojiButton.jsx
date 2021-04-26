import styled from 'styled-components'

const EmojiImg = styled.img`
width: 100px;

`

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow:  	0 8px 16px 0 rgba(0,0,0,0.10);
  margin: 15px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover{
    transform: translateY(-10px);
  }

  &:active{
    transform: scale(0.98);
  }

  `

const EmojiButton = ({onClick,...props}) => {
  return (
    <Wrapper onClick={onClick}>
      <EmojiImg {...props} />
    </Wrapper>
  )
}

export default EmojiButton

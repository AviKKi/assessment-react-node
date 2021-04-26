/**
 * Component Sugesting user to scroll down
 */
import styled, { keyframes } from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'

const RippleAnimation = keyframes`
    0% { opacity: 100%; transform: scale(0.9); }
    100% { opacity: 0%; transform: scale(2); }
`

const Ripple = styled.div`
  // basic shape
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  position: absolute;
  bottom: -1px;
  left: -1px;
  animation: ${RippleAnimation} 1s infinite ease-in;
`
const Ripple2 = styled(Ripple)`
  animation-delay: 0.3s;
`

const Wrapper = styled.div`
  // basic shape
  width: 60px;
  height: 45px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.primary};

  // styles for arrow
  font-size: 32px;
  text-align: center;
  color: #fff;
  padding-top: 15px;

  // position
  position: absolute;
  bottom: 10px;
  left: calc(50vw - 20px);
`

const ScrollDown = () => {
  return (
    <Wrapper>
      <FiChevronDown />
      <Ripple />
      <Ripple2 />
    </Wrapper>
  )
}
export default ScrollDown

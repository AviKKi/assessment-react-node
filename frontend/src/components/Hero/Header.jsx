import styled from 'styled-components'
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa'
import breakpoint from 'styled-components-breakpoint'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/**
 * set header prop true when this component is used on the other, otherwise set it to false
 */
const SocialIconsWrapper = styled.div`
  font-size: ${props => (props.header ? '48px' : '36px')};
  color: #222;
  display: ${props => (props.header ? 'none' : 'inline')};
  ${breakpoint('sm')`
    display: ${props => (props.header ? 'inline' : 'none')};
  `}
`

const A = styled.a`
  color: inherit;
  text-decoration: none; /* no underline */
`
const TwitterBtn = styled(A)`
  &:hover {
    color: #1da1f2;
  }
`

const IGBtn = styled(A)`
  &:hover {
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`


const SocialMediaIcons = props => (
  <SocialIconsWrapper {...props}>
    <A href='https://github.com/AviKKi'>
      <FaGithubSquare />
    </A>
    <IGBtn style={{ stroke: "url(#blue-gradient)" }} href='https://instagram.com/avikki_coder/'>
      <FaInstagramSquare />
    </IGBtn>
    <TwitterBtn href='https://twitter.com/avikki_coder'>
      <FaTwitterSquare />
    </TwitterBtn>
  </SocialIconsWrapper>
)

const Header = () => {
  return (
    <Wrapper>
      <img alt='logo' src='/logo.png' />
      <SocialMediaIcons header={true} />
    </Wrapper>
  )
}
export default Header

export { SocialMediaIcons }

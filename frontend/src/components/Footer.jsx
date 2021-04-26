import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 100vw;
  height: 30px;
  background-color: #cad5e2;
  color: #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`
const Content = styled.span`
`

const Footer = () => {
  return (
    <Wrapper>
      <Content></Content>
      <Content>{new Date().toDateString()}</Content>
      <Content>Made with React</Content>
    </Wrapper>
  )
}

export default Footer

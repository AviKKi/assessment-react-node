import Section from '../Sections'
import Header from './Header'
import MainContent from './MainContent'
import ScrollDown from './ScrollDown'
import styled from 'styled-components'

const FlexSection = styled(Section)`
  display: flex;
  flex-direction: column;
`

const Hero = () => {
  return (
    <FlexSection>
      <Header />
      <MainContent />
      <ScrollDown />
    </FlexSection>
  )
}
export default Hero
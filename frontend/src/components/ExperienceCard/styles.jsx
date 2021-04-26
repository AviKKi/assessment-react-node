import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Wrapper = styled.div`
  position: relative;
  margin-left: 110px;
  ${breakpoint('md')`
    margin-left: 180px;
  `}
  margin-bottom: 50px;
`

const Index = styled.h2`
  font-size: 96px;
  opacity: 0.2;
  color: ${props => props.theme.colors.primary};
  bold: 700;
  position: absolute;
  top: -25px;
  left: -130px;
  ${breakpoint('md')`
    left: -180px;
  `}
  margin: 0px;
`

const Title = styled.h2`
  font-size: 24px;
  ${breakpoint('md')`
    font-size: 36px;
  `}
  color: #222;
  font-weight: 300;
  margin: 0px;
`

const TitleWrapper = styled.div`
  margin-bottom: 10px;
`

const Bold = styled.span`
  font-weight: 700;
`

const SubText = styled.p`
  color: #777;
  line-height: 200%;
  font-size: 16px;
  ${breakpoint('md')`
    font-size: 18px;
  `}
  margin: 0;
`

export { Index, Title, TitleWrapper, Bold, SubText, Wrapper }

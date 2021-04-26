import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Col = styled(Wrapper)`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`

const ColLeft = styled(Col)`
  ${breakpoint('sm')`
    margin-left: 100px;
  `}
  align-items: flex-end;
`

const TextWrapper = styled.div`
  width: 360px;
  // margin-top: 160px;

  position: absolute;
  top: 380px;
  left: 10px;

  ${breakpoint('md')`
    position: relative;
    left: 0;
    top: 0;
  `}

  ${breakpoint('lg')`
    width: 520px;
  `}
`

const ImageSocialWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -90px;
  ${breakpoint('sm')`
    position: relative;
  `}
  ${breakpoint('md')`
    right: 0px;
  `}
`

const HeroImage = styled.img`
  width: 380px;
  ${breakpoint('sm')`
    width: 400px;
    margin-left: 30px;
  `}

  ${breakpoint('md')`
    margin-left: -40px; // adjust for white space in image
    width: 420px;
  `}

  ${breakpoint('lg')`
    width: 470px;
  `}
`

const Emoji = styled.img`
  display: inline;
  width: 35px;
  margin-right: 5px;
  margin-bottom: 0px;
  ${breakpoint('sm')`
    width: 72px;
  `}
`

const SuperText = styled.p`
  margin: 0;
  color: #999;
  font-size: 18px;

  display: inline;
  ${breakpoint('sm')`
    font-size: 24px;
  `}
  ${breakpoint('lg')`
    font-size: 36px;
  `}
`

const H1 = styled.h1`
  color: #222;
  font-size: 32px;

  font-weight: 400;
  margin: -10px;
  margin-left: 0px;
  display: inline;
  ${breakpoint('sm')`
    font-size: 48px;
  `}
  ${breakpoint('lg')`
    font-size: 72px;
  `}
`
const H1Bold = styled(H1)`
  font-weight: 600;
  display: block;
`

const H1Gradient = styled(H1Bold)`
  background: -webkit-linear-gradient(0deg, #009fff, #ec2f4b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  margin-right: 30px;
`
const HeadingFSDev = styled.span`
  width: 100%;
`

const SubText = styled.p`
  color: #999;
  font-size: 18px;
  margin: 0;
  ${breakpoint('sm')`
    font-size: 24px;
  `}
`

const MainContent = () => {
  return (
    <Wrapper>
      <ColLeft>
        <TextWrapper>
          <span>
            <Emoji src='/wave-twitter-emoji.svg' />
            <SuperText>Hello, I'm</SuperText>
          </span>
          <H1Bold>Atul Yadav</H1Bold>
          <HeadingFSDev>
            <H1Gradient>Full Stack</H1Gradient>
            <H1>Dev</H1>
          </HeadingFSDev>
          <SubText>Crafting engaging projects from 4 years</SubText>
        </TextWrapper>
      </ColLeft>
      <Col>
        <ImageSocialWrapper>
          <HeroImage src='/hero-image.png' />
        </ImageSocialWrapper>
      </Col>
    </Wrapper>
  )
}

export default MainContent

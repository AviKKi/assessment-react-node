import { rgba } from 'polished'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import Sections from '../Sections'
import Tabs from '../Tabs'
import tabs from './tabsData'
import ExperienceCard from '../ExperienceCard'
import { Index as IndexBase } from '../ExperienceCard/styles'
import Button from '../Button'
import StonePaperScissorGame from '../StonePaperScissorGame'

const ColoredSection = styled(Sections)`
  background-color: ${props => rgba(props.theme.colors.primary, 0.05)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`
const Index = styled(IndexBase)`
  position: relative;
  left: 0;
  top: 0;
`

const TabsWrapper = styled.div`
  padding: 80px 0;
`

const CardsWrapper = styled.div`
  padding: 0 10px;
  max-width: 1000px;
`

const TabbedSection = () => {
  const [selected, setSelected] = useState(1)
  const [data, setData] = useState([])

  const downloadData = async id => {
    let url = 'http://localhost:3600'
    if (id === 1) url += '/experience'
    else if (id === 2) url += '/education'
    else if (id === 3) url += '/randomNumber'
    else return
    const res = await fetch(url)
    const json = await res.json()
    setData(json)
  }

  useEffect(() => {
    downloadData(selected)
  }, [selected])

  let cards
  if (Array.isArray(data) && [1, 2].indexOf(selected) !== -1)
    cards = (data || []).map(data => <ExperienceCard key={data.id} {...data} />)
  else cards = []

  const randomizeHandler = () => downloadData(3)

  const NumberGenerator = (
    <>
      <Index>{data.number}</Index>
      <Button onClick={randomizeHandler}>Randomize</Button>
    </>
  )

  return (
    <ColoredSection>
      <TabsWrapper>
        <Tabs tabs={tabs} activeId={selected} onSelect={setSelected} />
      </TabsWrapper>
      <CardsWrapper>{cards}</CardsWrapper>
      {data.number !== undefined && selected === 3 && NumberGenerator}
      {selected === 4 && <StonePaperScissorGame />}
    </ColoredSection>
  )
}


export default TabbedSection
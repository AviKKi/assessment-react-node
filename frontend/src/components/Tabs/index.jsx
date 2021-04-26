/**
 * Dumb component, Tabs UI
 */
import styled from 'styled-components'
import Tab from './Tab'

const Wrapper = styled.div`
  width: max-content;
`
const Tabs = ({ tabs, activeId, onSelect }) => {
  const selectHandler = id => () => onSelect(id)
  const tabList = (tabs || []).map(({ label, id }) => (
    <Tab
      key={id}
      label={label}
      onSelect={selectHandler(id)}
      active={activeId === id}
    />
  ))

  return <Wrapper>{tabList}</Wrapper>
}

export default Tabs
/**
 * Single tab component
 */
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Wrapper = styled.span`
  font-size: 20px;
  color: #222;
  padding: 0 10px;
  margin: 0 10px;
  position: relative;
  cursor: pointer;

  ${breakpoint('sm')`
    font-size: 24px;
    padding: 0 20px;
  `}

  ${breakpoint('lg')`
    font-size: 32px;
    padding: 0 30px;
  `}


  :hover {
    &:after {
      opacity: 0.5;
      background: ${props => props.theme.colors.primary};
    }
  }

  &:after {
    position: absolute;
    content: '';
    height: 10px;
    bottom: 0px;
    width: 110%;
    z-index: -1;
    opacity: 0.3;
    left: -10px;
    background: ${props =>
      props.active ? props.theme.colors.primary : 'transparent'};
    
    
    ${breakpoint('lg')`
      bottom: 5px;
    `}

    }
`

const Tab = ({ active, label, onSelect }) => {
  return (
    <Wrapper onClick={onSelect} active={active}>
      {label}
    </Wrapper>
  )
}

export default Tab

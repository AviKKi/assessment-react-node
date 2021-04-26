import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export default styled.div`
  min-height: 100vh;
  min-width: calc(100vw - 20px);
  padding: 0 10px;

  ${breakpoint('md')`
    padding: 0 100px;
    min-width: calc(100vw - 200px);  
  `}
  
`

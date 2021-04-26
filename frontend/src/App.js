import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import useTimeout from '@rooks/use-timeout'
import theme from './theme'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TabbedSection from './components/TabbedSection'

import './App.css'

function App () {

  const [loaderDone, setLoaderDone] = useState(false)
  const timer = useTimeout(() => setLoaderDone(true), 8000)

  useEffect(() => {
    timer.start()
  })

  const app = (
    <div className='App'>
      <Hero />
      <TabbedSection />
      <Footer />
    </div>
  )
  
  return <ThemeProvider theme={theme}>{loaderDone && app}</ThemeProvider>
}

export default App

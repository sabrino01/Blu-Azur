import React from 'react'
import Header from './components/Header'
import Activites from './components/Activites'
import Activites2 from './components/Activites2'
import Localisation from './components/Localisation'
import Apropos from './components/Apropos'
import Activities3 from './components/Activities3'
import Reserve from './components/Reserve'
import Apropos2 from './components/Apropos2'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <Activites />
      <Activites2 />
      <Localisation />
      <Apropos />
      <Activities3 />
      <Reserve />
      <Apropos2 />
    </div>
  )
}

export default App

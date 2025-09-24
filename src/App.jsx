import React from 'react'
import Header from './components/Header'
import Activites from './components/Activites'
import Activites2 from './components/Activites2'
import Localisation from './components/Localisation'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <Activites />
      <Activites2 />
      <Localisation />
    </div>
  )
}

export default App

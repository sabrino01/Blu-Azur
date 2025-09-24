import React from 'react'
import Header from './components/Header'
import Activites from './components/Activites'
import Activites2 from './components/Activites2'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <Activites />
      <Activites2 />
    </div>
  )
}

export default App

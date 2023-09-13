import { useState } from 'react'
import AllPlayers from'./AllPlayers'
import SinglePlayer from './SinglePlayer'
import NavBar from './NavBar'
import NewPlayerForm from './NewPlayerForm'
import { Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <>
      <div>
        <h1>Puppy Bowl Roster</h1>
        <NavBar/>
        <Routes>
          <Route path='/SinglePlayer' element={<SinglePlayer/>} />
          <Route path='/AllPlayers' element={<AllPlayers/>} />
          <Route path='/NewPlayerForm' element={<NewPlayerForm/>} />
        </Routes>

      </div>
    </>
  )
}

export default App

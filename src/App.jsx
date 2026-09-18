
import './App.css'
import Navbar from "./Componentes/Navbar"
import Hero from './Componentes/Hero'
import { Suspense } from 'react'
import Players from './Componentes/Players/Players'



const featchPlayers = async() => {
   const res = await fetch('/Players.json')
   const players = await res.json()
   return players
}
const playersData = featchPlayers()

function App() {
  
const Loading = <h1>Data Loading...........</h1>
  return (
   <div>
    <Navbar></Navbar>
    <Hero></Hero>

    <Suspense fallback={Loading}>
      <Players playersData={playersData}></Players>
    </Suspense>
   </div>
  )
}

export default App

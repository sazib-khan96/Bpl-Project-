
import './App.css'
import Navbar from "./Componentes/Navbar"
import Hero from './Componentes/Hero'
import { Suspense, useState } from 'react'
import Players from './Componentes/Players/Players'
import SelectedPlayers from './Componentes/SelectedPlayers'



const featchPlayers = async() => {
   const res = await fetch('/Players.json')
   const players = await res.json()
   return players
}
const playersData = featchPlayers()

function App() {
  
const Loading = <h1>Data Loading...........</h1>
//  toggle fiture 
const [toggle,setToggle] = useState(true)


  return (
   <div>
    <Navbar></Navbar>
    <Hero></Hero>

    <div className='flex p-5 w-6xl mx-auto justify-between items-center striky top-0'>
      <h1>Available</h1>
      <div className='flex'>
        <button onClick={()=> setToggle(true)} className={`px-5 py-2 border ${toggle === true? 'bg-amber-500': ''}`}>Available</button>
        <button onClick={()=> setToggle(false)} className={`px-5 py-2 border ${toggle === false? 'bg-amber-500': ''}`}>
          Selected(0)
        </button>
      </div>
    </div>

    {
      toggle === true ? <Suspense fallback={Loading}>
      <Players playersData={playersData}></Players>
    </Suspense> :<SelectedPlayers></SelectedPlayers>
    }

    
   </div>
  )
}

export default App

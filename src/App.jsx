import "./App.css";
import Navbar from "./Componentes/Navbar";
import { Suspense, useState } from "react";
import Players from "./Componentes/Players/Players";
import SelectedPlayers from "./Componentes/SelectedPlayers";
import Footer from "./Componentes/Footer";
import SubscribeFrom from "./Componentes/SubscribeFrom";

const featchPlayers = async () => {
  const res = await fetch("/Players.json");
  const players = await res.json();
  return players;
};
const playersData = featchPlayers();




function App() {
  const Loading = <h1>Data Loading...........</h1>;
  //  toggle fiture
  const [toggle, setToggle] = useState(true);

  // available balance function here 
  const [availableBalance ,setAvilableBalance]= useState(10000)

let [selectplayer,setSelectPlayer] = useState([])

  const getSelectPlayer = (player)=>{
    const newSelectPlayer = [...selectplayer,player]
    setSelectPlayer(newSelectPlayer)
    console.log(newSelectPlayer)
  }

  return (
    <div>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className=" gap-5 lg:flex p-5 w-6xl mx-auto justify-between items-center striky top-0">
        <h1 className="font-bold text-2xl">Available Players</h1>
        <div className="flex">
          <button
            onClick={() => setToggle(true)}
            className={`px-5 py-2 border ${toggle === true ? "bg-amber-500" : ""}`}>
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`px-5 py-2 border ${toggle === false ? "bg-amber-500" : ""}`} >
            Selected(0)
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense fallback={Loading}>
          <Players playersData={playersData}availableBalance={availableBalance} setAvilableBalance={setAvilableBalance}></Players> 
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
      <SubscribeFrom></SubscribeFrom>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./Componentes/Navbar";
import { Suspense, useState } from "react";
import Players from "./Componentes/Players/Players";
import SelectedPlayers from "./Componentes/SelectedPlayers";
import Footer from "./Componentes/Footer";
import SubscribeFrom from "./Componentes/SubscribeFrom";
import { ToastContainer } from "react-toastify";

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

const [selectplayer, setSelectPlayer] = useState([]);

const removePlayers = (player) => {
  const newSelectPlayer = selectplayer.filter(newPlayer => {
    return newPlayer.id !== player.id;
  });

  setSelectPlayer(newSelectPlayer);
const newBalence =  availableBalance + player.price
setAvilableBalance(newBalence)
  
};


  return (
    <div>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="w-full flex items-center font-semibold md:flex  p-5 max-w-6xl mx-auto justify-between striky top-0">
        <div>
          <h1 className=" md:font-bold text-2xl text-left max-w-7xl">{toggle?"Available Players":"Selected Players"}</h1>
        </div>
        <div className="flex">
          {/* main toggle btn  */}
          <button
            onClick={() => setToggle(true)}
            className={`px-5 py-2 rounded-l-full border border-yellow-200 border-r-0 shadow-xl font-semibold ${toggle === true ? "bg-amber-500" : ""}`}>
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`px-5 py-2 border border-yellow-200 border-l-0 rounded-r-2xl shadow-xl font-semibold ${toggle === false ? "bg-amber-500" : ""}`} >Selected ({selectplayer.length})
            
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense fallback={Loading}>
        <Players selectplayer={selectplayer} setSelectPlayer={setSelectPlayer} playersData={playersData}availableBalance={availableBalance} setAvilableBalance={setAvilableBalance}></Players> 
        </Suspense>
      ) : (
        <SelectedPlayers selectplayer={selectplayer} removePlayers={removePlayers}></SelectedPlayers>
      )}
      <div className="p-3">
        <SubscribeFrom></SubscribeFrom>
      </div>
      {/* Footer */}
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>

  );
}

export default App;

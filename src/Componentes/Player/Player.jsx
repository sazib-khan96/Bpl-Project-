import { useState } from "react";
import {UserRound,MapPin} from 'lucide-react';
import { toast } from "react-toastify";
const Player = ({ player,setAvilableBalance,availableBalance,selectplayer,setSelectPlayer }) => {

  // selected players function

  // btn selected or not selected 
 

  const [selected,setSelected] = useState(false)

const btnSelected = (player)=> {
  if(selected){
    setSelected(false)
  }
  else{
    setSelected(true)
  };
  if(availableBalance < player.price){
     toast('Not Enough Balance')
     return
  }
  setAvilableBalance(availableBalance -player.price)
  
  const newSelectedPlayers = [...selectplayer,player]
  setSelectPlayer(newSelectedPlayers)
}

  const {
    name,
    country,
    role,
    image,
    price,
    bowlingStyle,
    battingStyle,
    rating,
  } = player;
  return (
    <div className="p-3 shadow-xl rounded-xl gap-5 ">
      <img className="rounded-xl w-100 h-60" src={image} alt="" />
      <h3 className="font-bold mt-3 flex items-center gap-1"><UserRound />{name}</h3>
      <p className="flex items-center gap-1 mt-2"><MapPin />{country}</p>
      <div className="flex justify-between p-2 shadow-sm">
        <p> Role : {role}</p>
        <p>Rating:{rating}</p>
      </div>
      <div className="flex justify-between p-2 shadow-sm mt-2">
        <p>{bowlingStyle}</p>
        <p>{battingStyle}</p>
      </div>
      <div className="flex justify-between p-3 items-center">
        <h3 className="font-semibold">${price}</h3>
        <button onClick={()=>{btnSelected(player)}} className={`py-2 px-5 rounded-2xl font-semibold text-white ${selected === true ? "bg-green-500 cursor-not-allowed" : "bg-amber-400"} shadow-2xl hover:bg-amber-500 ${selected? 'hover:bg-amber-600':''}`}>
          {selected ? "Selected " : "Available"}
        </button>
      </div>
    </div>
  );
};

export default Player;

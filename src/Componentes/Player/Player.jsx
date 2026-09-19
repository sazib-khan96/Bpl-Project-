import React, { useState } from "react";

const Player = ({ player,getSelectPlayer }) => {
  const [play, setPlay] = useState(false);

const selectHandel = ()=>{
  setPlay(true);
 getSelectPlayer(player)
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
    <div className="w-100 gap-5 md:p-3 shadow-xl rounded-xl gap-5 lg:gap-5 ">
      <img className="rounded-xl w-100 h-60" src={image} alt="" />
      <h3 className="font-bold mt-3">Name:{name}</h3>
      <p>Country : {country}</p>
      <div className="flex justify-between p-2 shadow-sm">
        <p> Role : {role}</p>
        <p>Rating:{rating}</p>
      </div>
      <div className="flex justify-between p-2 shadow-sm mt-2">
        <p>{bowlingStyle}</p>
        <p>{battingStyle}</p>
      </div>
      <div className="flex justify-between p-3 items-center">
        <h3>${price}</h3>
        <button disabled={play} onClick={selectHandel} className={`py-2 px-5 rounded-2xl font-semibold text-white ${play === true ? "bg-green-500 cursor-not-allowed" : "bg-amber-400"} shadow-2xl hover:bg-amber-500`}>
          {play ? "Selected " : "Available"}
        </button>
      </div>
    </div>
  );
};

export default Player;

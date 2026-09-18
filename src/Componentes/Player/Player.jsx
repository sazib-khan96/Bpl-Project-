import React, { useState } from 'react';

const Player = ({player}) => {

    const [play,setPlay] = useState(true)

    const playHandel = ()=>{
        if(play === true){
            setPlay(false)
        }
        else{
            setPlay(true)
        }
    }

    

    const {name,country,role,image,price,bowlingStyle,battingStyle,rating} = player
    return (
        <div className='p-3 shadow-xl rounded-xl'>
            <img className='rounded-xl w-100 h-60' src={image} alt="" />
            <h3 className='font-bold mt-3'>Name:{name}</h3>
            <p>Country : {country}</p>
            <div className='flex justify-between p-2 shadow-sm'>
                <p> Role : {role}</p>
                <p>Rating:{rating}</p>
            </div>
            <div className='flex justify-between p-2 shadow-sm mt-2' >
                <p>{bowlingStyle}</p>
                <p>{battingStyle}</p>
            </div>
            <div className='flex justify-between p-3 items-center'>
                <h3>${price}</h3>
                <button onClick={playHandel}  className={`py-2 px-5 rounded-2xl font-semibold text-white ${play === false ? "bg-green-500": "bg-amber-400"} shadow-2xl hover:bg-amber-500`}>{play=== true?"Available" : "selected"}</button>
            </div>


        </div>
    );
};

export default Player;
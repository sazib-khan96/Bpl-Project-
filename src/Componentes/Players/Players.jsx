import React, { use } from 'react';

import Player from "../Player/Player"

const Players = ({playersData,availableBalance,setAvilableBalance,selectplayer,setSelectPlayer}) => {
    const allPlayers = use(playersData)
    
    return (
        <div className=' md:w-6xl mx-auto mt-10 p-3'>
            <h1 className='w-full text-center text-2xl  border-b-1 md:text-2xl mb-10  px-6 py-2'>Our Players List</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                {
                    allPlayers.map(player => <Player  player={player} availableBalance={availableBalance}setAvilableBalance={setAvilableBalance} key={player.id} setSelectPlayer={setSelectPlayer} selectplayer={selectplayer}></Player> )
                }
            </div>
        </div>
    );
};

export default Players;
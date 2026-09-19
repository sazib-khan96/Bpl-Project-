import React, { use } from 'react';

import Player from "../Player/Player"

const Players = ({playersData,availableBalance,setAvilableBalance}) => {
    const allPlayers = use(playersData)
    
    return (
        <div className='lg:w-6xl mx-auto mt-10 p-3'>
            <h1 className=' text-2xl mb-10 border inline px-6 py-2'>Our Players List</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
                {
                    allPlayers.map(player => <Player player={player} availableBalance={availableBalance}setAvilableBalance={setAvilableBalance} key={player.id}></Player> )
                }
            </div>
        </div>
    );
};

export default Players;
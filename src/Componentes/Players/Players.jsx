import React, { use } from 'react';

import Player from "../Player/Player"

const Players = ({playersData}) => {
    const allPlayers = use(playersData)
    
    return (
        <div className='w-6xl mx-auto mt-10'>
            <h1 className='font-bold text-4xl m-5'>Our Players List</h1>
            <div className='grid grid-cols-3  gap-5'>
                {
                    allPlayers.map(player => <Player player={player} key={player.id}></Player> )
                }
            </div>
        </div>
    );
};

export default Players;
import React, { use } from 'react';

import Player from "../Player/Player"

const Players = ({playersData}) => {
    const allPlayers = use(playersData)
    
    return (
        <div>
            <h1>Our Players List</h1>
            <div>
                {
                    allPlayers.map(player => <Player player={player} key={player.id}></Player> )
                }
            </div>
        </div>
    );
};

export default Players;
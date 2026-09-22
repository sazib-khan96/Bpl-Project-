import React from 'react';

import SelectedPlayer from '../Componentes/SelectedPlayer'
const SelectedPlayers = ({selectplayer,removePlayers}) => {
    
    return (
        <div className='p-5 w-6xl mx-auto'>
            <div>
                <h1 className='text-2xl font-bold'>{selectplayer.length == "" ? "No Select Players": `Selected Players ${selectplayer.length} (6)`}</h1>
                {
                    selectplayer.map(player => <SelectedPlayer removePlayers={removePlayers} player={player}></SelectedPlayer> )
                }
            </div>
            
        </div>
    );
};

export default SelectedPlayers;
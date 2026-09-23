import React from 'react';

import SelectedPlayer from '../Componentes/SelectedPlayer'
const SelectedPlayers = ({selectplayer,removePlayers}) => {
    
    return (
        <div className='w-full md:px-3 md:p-5 max-w-6xl mx-auto'>
            <div>
                <h1 className=' md:text-2xl font-bold'>{selectplayer.length == "" ? "No Select Players": `Selected Players ${selectplayer.length} (6)`}</h1>
                {
                    selectplayer.map(player => <SelectedPlayer key={player.id} removePlayers={removePlayers} player={player}></SelectedPlayer> )
                }
            </div>
            
        </div>
    );
};

export default SelectedPlayers;
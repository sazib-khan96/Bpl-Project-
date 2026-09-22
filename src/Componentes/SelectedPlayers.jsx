import React from 'react';

import SelectedPlayer from '../Componentes/SelectedPlayer'
const SelectedPlayers = ({selectplayer,removePlayers}) => {
    
    return (
        <div className='p-5 w-6xl mx-auto'>
            <div>
                {
                    selectplayer.map(player => <SelectedPlayer removePlayers={removePlayers} player={player}></SelectedPlayer> )
                }
            </div>
            
        </div>
    );
};

export default SelectedPlayers;
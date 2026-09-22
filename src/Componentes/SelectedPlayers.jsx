import React from 'react';

import SelectedPlayer from '../Componentes/SelectedPlayer'
const SelectedPlayers = ({selectplayer}) => {
    
    return (
        <div className='p-5 w-6xl mx-auto'>
            <div>
                {
                    selectplayer.map(player => <SelectedPlayer player={player}></SelectedPlayer> )
                }
            </div>
            
        </div>
    );
};

export default SelectedPlayers;
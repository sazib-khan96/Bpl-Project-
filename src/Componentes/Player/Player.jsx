import React from 'react';

const Player = ({player}) => {

    const {name,country,role,image,pricerating,bowlingStyle,battingStyle} = player
    return (
        <div>
            <h3>Name:{name}</h3>
        </div>
    );
};

export default Player;
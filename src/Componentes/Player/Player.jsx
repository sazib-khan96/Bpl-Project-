import React from 'react';

const Player = ({player}) => {

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
            <div className='flex justify-between p-3'>
                <h3>${price}</h3>
                <button>Abailabale</button>
            </div>


        </div>
    );
};

export default Player;
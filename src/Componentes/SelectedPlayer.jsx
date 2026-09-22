import React from 'react';

const SelectedPlayer = ({player}) => {

    const {name,role,country,price,image} = player
    return (
        <div className='p-5 '>
            <div className='flex gap-2 mt-1 justify-between items-center bg-gray-100 p-3 rounded-2xl shadow-xl'>
                <div className='flex gap-3'>
                    <img className='w-[100px] rounded-2xl' src={image} alt="" />
                   <div>
                     <h1 className='text-2xl'>{name}</h1>
                    <p>{role}</p>
                    <p>{country}</p>
                    <p>${price}</p>
                   </div>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;
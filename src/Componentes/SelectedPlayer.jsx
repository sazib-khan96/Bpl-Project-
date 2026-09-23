import React from 'react';
import { Trash} from 'lucide-react';
const SelectedPlayer = ({player,removePlayers}) => {

    const {name,role,price,image} = player

    const remove= ()=>{
       removePlayers(player) 
    }
    return (
        <div className='p-3 '>
            <div className='flex gap-2 justify-between items-center bg-gray-100 p-3 rounded-2xl'>
                <div className='flex gap-3'>
                    <img className='w-20 h-20 md:w-24 md:h-24 rounded-full' src={image} alt="" />
                   <div>
                     <h1 className='font-semibold md:text-2xl'>{name}</h1>
                    <p>{role}</p>
                    <p>${price}</p>
                   </div>
                </div>
                <div onClick={remove}>
                    <Trash />
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;
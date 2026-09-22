import React from 'react';
import { Trash} from 'lucide-react';
const SelectedPlayer = ({player,removePlayers}) => {

    const {name,role,price,image} = player

    const remove= ()=>{
       removePlayers(player) 
    }
    return (
        <div className='p-5 '>
            <div className='flex gap-2 justify-between items-center bg-gray-100 p-3 rounded-2xl shadow-xl'>
                <div className='flex gap-3'>
                    <img className='w-[100px] h-[100px] rounded-full' src={image} alt="" />
                   <div>
                     <h1 className='text-2xl'>{name}</h1>
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
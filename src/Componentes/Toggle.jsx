import React from 'react';

const Toggle = ({toggle,setToggle}) => {
    return (
        <div className='w-6xl p-5 mx-auto flex justify-between items-center'>
            <h1>Available Players </h1>
            <div className='flex gap-2'>
                <button className={`py-2 px-5 rounded-2xl shadow-xl ${toggle === true? "bg-amber-100":""}`}>Available</button>
                <button  className={`py-2 px-5 rounded-2xl shadow-xl ${toggle === false? 'bg-amber-100': ""}`}>Selected</button>
            </div>
        </div>
    );
};

export default Toggle;
import React from 'react';
import heroImg from '../assets/hero.webp'

const Hero = () => {
    return (
        <div className='flex w-full h-96 justify-center items-center p-3'>
            <img className=' items-center justify-center object-contain h-55 ' src={heroImg} alt="" />
        </div>
    );
};

export default Hero;
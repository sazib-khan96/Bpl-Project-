import React from 'react';
import FooterForm from './FooterForm';

const SubscribeFrom = () => {
    return (
        <div className='w-full  md:px-3 py-12 rounded-2xl bg-amber-200 mx-w-[900px] mx-auto mt-10 mb-10 text-center shadow-2xl'>
            <h1 className='text-2xl md:text-4xl'>Subscribe to our Newsletter</h1>
            <p>Get the latest updates and news right in your inbox!</p>
            <div>
                <FooterForm></FooterForm>
            </div>
        </div>

    );
};

export default SubscribeFrom;
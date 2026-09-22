import React from 'react';


const FooterForm = () => {
    return (
        <div>
           <h3>Subscribe</h3> 
           <p>Subscribe to our newsletter for the latest updates.</p>
           <div className='mt-5'>
            <input className='p-3 bg-white rounded-l-2xl outline-0 text-black' type="text" placeholder='Enter your email' />
            <button className='p-3 bg-amber-200 rounded-r-2xl text-black font-bold'>Subscribe </button>
           </div>
        </div>
    );
};

export default FooterForm;
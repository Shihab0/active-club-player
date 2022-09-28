import React from 'react';

const Break = ({breakTime}) => {
   
    
    return (
        <div>
            <div className='mt-4 p-2'>
                <h2 className='text-lg font-bold'>Added a break</h2>
                <div className='bg-gray-300 flex justify-between items-center py-4'>
                    <div onClick={breakTime} className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4 className='font-semibold'>05</h4>
                    </div>
                    <div onClick={breakTime} className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4  className='font-semibold'>08</h4>
                    </div>
                    <div  onClick={breakTime} className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4 className='font-semibold'>10</h4>
                    </div>
                    <div onClick={breakTime} className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4 className='font-semibold'>04</h4>
                    </div>
                    <div onClick={breakTime} className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4 className='font-semibold'>07</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Break;
import React from 'react';

const Break = () => {
    return (
        <div>
            <div className='mt-4 p-2'>
                <h2 className='text-lg font-bold'>Added a break</h2>
                <div className='bg-gray-300 flex justify-between items-center py-4'>
                    <div className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4 className='font-semibold'>05m</h4>
                    </div>
                    <div className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4 className='font-semibold'>08m</h4>
                    </div>
                    <div className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4 className='font-semibold'>10m</h4>
                    </div>
                    <div className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4 className='font-semibold'>04m</h4>
                    </div>
                    <div className='bg-white w-10 h-10 rounded-full m-2 flex items-center justify-center cursor-pointer'>
                        <h4 className='font-semibold'>07m</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Break;
import React from 'react';
import photo from './user.webp'


const User = (props) => {
    const {users} = props;

    let userName = '';
    users.forEach(user => {
        userName = user.name;
    });

    return (
       <div>
             <div className='flex gap-3 items-center m-3'>
            <img src={photo} alt="" className='inline rounded-full w-16 ' />
            <div>
            <p className='font-bold'>Last Walker Name: {userName} </p>
            <address><small>Pakundia, Kishoreganj</small></address>
            </div>
        </div>
        <div className='flex justify-between m-2 bg-gray-300 p-3'>
            <div>
                <h2 className='text-lg font-bold'>60Kg</h2>
                <p>Wight</p>
            </div>
            <div>
                <h2 className='text-lg font-bold'>5.7</h2>
                <p>Height</p>
            </div>
            <div>
                <h2 className='text-lg font-bold'>23Y</h2>
                <p>Age</p>
            </div>
        </div>
       </div>
    );
};

export default User;
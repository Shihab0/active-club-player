import React from 'react';

const Details = (props) => {

    console.log(props.users);
    const {users, time} = props;

    let total = 0;
    for(const walk of users){
        total = total + walk.time;
    }

    return (
        <div className='m-2'>
            <h1 className='font-bold'>Walking Details: </h1>
            <h2 className='
            bg-gray-300 p-3 font-bold'>Total Walk: <span className='text-gray-500 mx-2'>{total}Km</span></h2>
            <h2 className='
            bg-gray-300 p-3 font-bold'>Break time: <span className='text-gray-500 mx-2'>{time}Min</span></h2>
            

            
        </div>
    );
};

export default Details;
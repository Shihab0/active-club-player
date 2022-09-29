import React from 'react';

const Card = (props) => {
    // console.log(props.user);
    const {totalWalk} = props;
    const {name, picture, age, time} = props.user;
    return (
            <div className='w-56 p-6 border border-yellow-200 rounded-lg bg-white h-96 relative'>
                <div>
               <img src={picture} alt="" className='h-24 w-11/12' />
                <h2 className='text-lg font-bold'>{name}</h2>
                <p>Go Out! Discover yourself in a new place. It's Really  exiting to visit every new country.</p>
                <p className=' font-bold'>Age: {age}</p>
                <p className=' font-bold'>Walk: {time} km</p>
                <button onClick={() => totalWalk(props.user)} className='w-11/12 left-3 bg-emerald-600 px-6 py-2 rounded-lg absolute bottom-0 font-bold text-white'>Add To List</button>
                </div>
                </div>     
    );
};

export default Card;
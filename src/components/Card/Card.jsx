import React from 'react';

const Card = (props) => {
    console.log(props.user)
    const {name, picture, age, time} = props.user;
    return (
            <div className='w-56 p-6 border border-yellow-200 rounded-lg bg-white h-96 relative'>
                <div>
               <img src={picture} alt="" className='h-24 w-11/12' />
                <h2 className='text-lg font-bold'>{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fugiat!</p>
                <p className=' font-bold'>Age: {age}</p>
                <p className=' font-bold'>Time: {time}</p>
                <button className='w-11/12 left-3 bg-emerald-600 px-6 py-2 rounded-lg absolute bottom-0 font-bold text-white'>Add To List</button>
                </div>
                </div>     
    );
};

export default Card;
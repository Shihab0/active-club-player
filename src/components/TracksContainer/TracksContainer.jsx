
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import User from '../User/User';
import './TracksContainer.css'

const TracksContainer = () => {
    const [data, setData] = useState([]);

    useEffect(data => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[]);

    return (
        <div className='container'>
            <div>
            <h3 className='mt-5 mx-5 font-bold'>Select today’s exercise: </h3>
                <div>
                    <div className='grid grid-cols-3 gap-3 p-5'>
                       {data.map(user => <Card user={user}></Card>)}
                    </div>
                </div>
            
            </div>


            <div className='bg-white sticky right-0 top-5'>
                <div>
                    <div>
                        <User></User>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TracksContainer;
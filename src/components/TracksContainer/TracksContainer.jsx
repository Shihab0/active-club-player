
import React, { useEffect, useState } from 'react';
import Details from '../../Details/Details';
import Break from '../Break/Break';
import Card from '../Card/Card';
import User from '../User/User';
import './TracksContainer.css';



const TracksContainer = () => {
    const [data, setData] = useState([]);
    const [preUser, setPreUser] = useState([]);

    useEffect(data => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[]);

    const totalWalk = (user) => {
        const newUser = [...preUser, user];
        setPreUser(newUser);
    }

   
    return (
        <div className='container'>
            <div>
            <h3 className='mt-5 mx-5 font-bold'>Select today’s exercise: </h3>
                <div>
                    <div className='grid grid-cols-3 gap-3 p-5'>
                       {data.map(user => <Card user={user}
                       key={user.id} totalWalk ={totalWalk}></Card>)}
                    </div>
                </div>
            
            </div>


            <div className='bg-white sticky right-0 top-5'>
                <div>
                    <div>
                        <p>{preUser.length}</p>
                        <User users= {preUser}></User>
                        <Break></Break>
                        <Details users={preUser}></Details>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TracksContainer;
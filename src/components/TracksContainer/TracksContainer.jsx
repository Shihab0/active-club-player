
import React, { useEffect, useState } from 'react';
import Details from '../../Details/Details';
import QuestionAns from '../../QuestionAns/QuestionAns';
import Break from '../Break/Break';
import Card from '../Card/Card';
import User from '../User/User';
import './TracksContainer.css';



const TracksContainer = () => {
    const [data, setData] = useState([]);
    const [preUser, setPreUser] = useState([]);
    const [time, setTime] = useState(0)

    useEffect(data => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[]);

    const totalWalk = (user) => {
        const newUser = [...preUser, user];
        setPreUser(newUser);
    }

    const breakTime =(e) => {
        setTime(e.target.innerText);
    };

   
    return (
        <div className='container'>
            <div>
            <h3 className='mt-5 mx-5 font-bold text-lg'>Trak Your Every Step </h3>
                <div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-5'>
                       {data.map(user => <Card user={user}
                       key={user.id} totalWalk ={totalWalk}></Card>)}
                    </div>
                    <QuestionAns></QuestionAns>
                </div>
            
            </div>


            <div className='bg-white sticky right-0 top-5'>
                <div>
                    <div>
                        <p>{preUser.length}</p>
                        <User users= {preUser}></User>
                        <Break breakTime={breakTime}></Break>
                        <Details users={preUser} time={time}></Details>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TracksContainer;
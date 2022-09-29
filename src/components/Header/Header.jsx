import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className='pt-4'>
            <h1 className='text-purple-900 text-3xl font-bold text-center'><FontAwesomeIcon icon={faWalking}></FontAwesomeIcon> Track Your Steps</h1>
        </div>
    );
};

export default Header;
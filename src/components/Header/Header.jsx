import React from 'react';

const Header = (props) => {
    return (
        <div className='d-flex justify-content-between align-items-center mb-2'>
            <h3>My works</h3>
            <p>{props.all} записей, из них понравилось {props.liked}</p>
        </div>
    )
}

export default Header;
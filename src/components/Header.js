import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Button from './Button';

const Header = ({ title, onAdd, showAddTaskValue }) => {
    const location = useLocation()

    return (
        <header className='header' >
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button color={showAddTaskValue ? 'red' : 'green'}
                    text={showAddTaskValue ? 'Close' : 'Add New Task'} onClick={onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Tack Tracker',
}

//css in js
// const headerStile = {
//     color: 'red',
//     backgroundColor: 'black',
// }

Header.propTypes = {
    title: PropTypes.string,
}

export default Header

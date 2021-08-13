import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAddTaskValue }) => {
    return (
        <header className='header' >
            <h1>{title}</h1>
            <Button color={showAddTaskValue ? 'red' : 'green'}
                text={showAddTaskValue ? 'Close' : 'Add New Task'} onClick={onAdd} />
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

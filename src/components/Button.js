import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    return <button style={{ backgroundColor: color }}
        onClick={onClick}
        className='btn' >{text}</button>
}

Button.defaultProps = {
    color: 'black',
    text: 'Add',
}

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button

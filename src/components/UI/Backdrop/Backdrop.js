import React from 'react';
import './Backdrop.scss'


const backdrop = (props) => {
    return (
        props.show ? <div onClick={props.clicked} className="backdrop"></div> : null
    )
};

export default backdrop;
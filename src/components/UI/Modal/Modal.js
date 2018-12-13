import React from 'react';
import './Modal.scss'


const modal = (props) => {
    return (
        <div className="modal"
            style={{
                transform: props.show ? 'translateY(0)' : "translateY(-100vH)",
                opacity: props.show ? '1' : '0'
            }}

        >
            {props.children}
        </div>
    )
};

export default modal;
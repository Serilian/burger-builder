import React from 'react';
import './Modal.scss'
import Backdrop from '../Backdrop/Backdrop'


const modal = (props) => {
    return (
        <>
            <Backdrop clicked={props.modalClosed} show={props.show}/>
            <div className="modal"
                 style={{
                     transform: props.show ? 'translateY(0)' : "translateY(-100vH)",
                     opacity: props.show ? '1' : '0'
                 }}

            >
                {props.children}
            </div>

        </>
    )
};

export default modal;
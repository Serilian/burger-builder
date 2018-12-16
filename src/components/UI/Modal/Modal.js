import React, {Component} from 'react';
import './Modal.scss'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component {



    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <>
                <Backdrop clicked={this.props.modalClosed} show={this.props.show}/>
                <div className="modal"
                     style={{
                         transform: this.props.show ? 'translateY(0)' : "translateY(-100vH)",
                         opacity: this.props.show ? '1' : '0'
                     }}

                >
                    {this.props.children}
                </div>

            </>
        )
    };
}

export default Modal;
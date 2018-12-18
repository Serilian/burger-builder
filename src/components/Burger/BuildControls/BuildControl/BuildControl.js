import React from 'react';
import './BuildControl.scss'

const buildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button disabled={props.disabled} className="Less" onClick={props.removed}>Lelss</button>
            <button onClick={props.added} className="More">More</button>
        </div>
    )
};

export default buildControl;
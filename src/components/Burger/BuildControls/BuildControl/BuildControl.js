import React from 'react';
import './BuildControl.css'

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <div className="Label Less" onClick={props.removed}>Less</div>
        <div className="Label More" onClick={props.added}>More</div>
    </div>
);

export default buildControl;
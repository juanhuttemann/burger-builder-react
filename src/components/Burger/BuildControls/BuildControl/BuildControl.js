import React from 'react';
import './BuildControl.css'

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <div className="Label Less">Less</div>
        <div className="Label More">More</div>
    </div>
);

export default buildControl;
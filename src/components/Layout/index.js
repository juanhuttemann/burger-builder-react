import React, {Fragment} from 'react'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Fragment>
        <Toolbar/>
        <main className="Content">
            {props.children}
        </main>
    </Fragment>
);

export default layout
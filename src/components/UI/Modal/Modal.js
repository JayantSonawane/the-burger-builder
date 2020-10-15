import React from 'react';

import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (porps) => (
    <Aux>
        <Backdrop show={porps.show} clicked={porps.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: porps.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: porps.show ? '1' : '0'
            }}>
            {porps.children}
        </div>
    </Aux>
);

export default modal;
import React from 'react';
import classes from './Modal.module.scss';

const Modal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.modal]

    if (visible) {
        rootClasses.push(classes.active);
    }
    
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modal_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;

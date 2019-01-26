import React from 'react';

const Button = (props) => {
    return (
        <div  className={props && props.divClass ? props.divClass : ''}> 
            <button className={props.disableButton? props && props.buttonClass ? props.buttonClass + ' disabled' : 'btn btn-primary' : props && props.buttonClass ? props.buttonClass : 'btn btn-primary'} onClick={() =>{props.eventHandler()}}>
                {props.buttonText}
            </button>
            {props.spanText ? <span className = {props.buttonSpanClass}>{props.spanText}</span> : ''}
        </div>
    );
};

export default Button;
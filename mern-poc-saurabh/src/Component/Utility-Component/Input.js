import React from 'react';

const Input = (props) => {
    return (
        <div className={props.divClass}> 
            {/* { console.log(JSON.stringify(props)) } */}
            { props.labelText ? <label>{props.labelText}</label> : ''}
            <div>
            {props.displayCountryCode ? 
                <input id={props.countrycode}
                    placeholder={props.placeholdereTextCountryCode} 
                    type={props.type} 
                    onChange = {(e) =>{props.eventHandler(e)}}
                    className={props.inputClass + ' '+ props.inputClassCountryCode}
                /> : ''
            } 
            <input id={props.id}
                placeholder={props.placeholdereText} 
                type={props.type} 
                className={props.displayCountryCode ? props.inputClass + ' ' + props.inputClassMobile : props.inputClass}
                onChange = {(e) =>{props.eventHandler(e)}}
            />
            </div>
            {props.isValidation ? <span className=''>{props.validationMessage}</span> : ''}
        </div>
    );
};

export default Input;
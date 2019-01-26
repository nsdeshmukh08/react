import React, { Component } from 'react';

class Logout extends Component {
    constructor(props){
        super(props);
        this.logOutconfirmation();
    }
    logOutconfirmation = () =>{
        let value = window.confirm("Do you want to logout?");
        if(value){
            this.props.history.push('/');
        }else{
            this.props.history.push('/post');
        }
    }

    render() {
        return (
            <div>
                logout the user.
            </div>
        );
    }
}

export default Logout;
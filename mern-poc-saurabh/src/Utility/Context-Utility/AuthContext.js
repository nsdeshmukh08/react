import React, { Component } from 'react';
import utility from "../utility";
export const AuthContext = React.createContext();

class AuthProvider extends Component {
    constructor(props){
        super(props);
        this.state = { isAuth: false };
        this.utilityObj = new utility();
    }

    storeTokenValue = (response) => {
        // this.setState({
        //     isAuth: data.auth,
        //     time: new Date().getTime()
        // });
        //response.data.token.time = new Date().getTime();
        response.userData.time = new Date().getTime();
        localStorage.storeSessionInfo = JSON.stringify(response.userData);
    }

    checkForValidSession = () => {
        let currentTime = new Date().getTime();
        let temp =  localStorage.storeSessionInfo ? JSON.parse(localStorage.storeSessionInfo) : {};
        let oldTime = temp ? temp.time : '';
        //console.log(oldTime + " ---- " + currentTime);
        let expireVal= this.utilityObj.returnSessionExpiry(oldTime, currentTime);
        temp.time = currentTime;
        localStorage.storeSessionInfo = JSON.stringify(temp);
        return expireVal;
    }

    render() {
        return (
            <AuthContext.Provider value={{isAuth: this.state.isAuth, 
                storeTokenValue: this.storeTokenValue, 
                checkForValidSession:this.checkForValidSession}}>

                {this.props.children}

            </AuthContext.Provider>
        );
    }
}
const AuthConsumer = AuthContext.Consumer;

export {AuthProvider, AuthConsumer };
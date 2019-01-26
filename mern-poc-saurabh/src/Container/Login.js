import React, { Component } from 'react';
import RenderStartPage from '../Component/RenderStartPage';
import {connect} from 'react-redux';
import {fetchLoginUser} from '../Actions/index_Action';
import Button from '../Component/Utility-Component/Button';
import { AuthConsumer } from "../Utility/Context-Utility/AuthContext";
class Login extends Component {
    constructor(props){
        localStorage.removeItem("storeSessionInfo");
        super(props);
        this.authFunction = '';
    }

    checkUserCredentials = () => {
        this.props.fetchLoginUser(document.getElementById('username1').value, document.getElementById('password1').value)
        .then(() =>{
            console.log('alare ala ===>' + JSON.stringify(this.props.loginCreds));
            this.authFunction(this.props.loginCreds);
            this.props.history.push('/extentiaexnet');
        });
    }

    render() {
        return (
            <div>
                 <AuthConsumer>
                    {({isAuth, storeTokenValue})=>{
                        this.authFunction = storeTokenValue;
                    }}
                </AuthConsumer>

                <RenderStartPage/>
                <div className="col-sm-5 static-form">
                    <div  className='form-group'> 
                        <label>Username</label> <input id='username1' placeholder="Enter username" className='form-control' type='text'/>
                    </div>
                    <div  className='form-group'> 
                    <label>Password</label> <input id='password1' placeholder="Enter password" className='form-control' type='password'/>
                    </div>

                    <div className="checkbox">
                        <label><input type="checkbox" name="remember"/> Remember me</label>
                    </div>

                    <Button divClass='form-group' buttonClass='btn btn-primary' eventHandler={this.checkUserCredentials} buttonText='Submit'/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({loginCreds}){
    return{
        loginCreds : loginCreds
    }
}

export default connect(mapStateToProps, {fetchLoginUser})(Login);
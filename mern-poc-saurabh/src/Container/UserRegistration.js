import React, { Component } from 'react';
import axios from "axios";
import RenderStartPage from '../Component/RenderStartPage';
import Input from '../Component/Utility-Component/Input';
import {serviceUrl} from '../Utility/ServiceUtility';
import Button from '../Component/Utility-Component/Button';
class UserRegistration extends Component {
    constructor(props){
        super(props);
        this.validation = {
            email: '',
            password: '',
            countrycode:'',
            mobile: '',
            otp: ''
        };
        this.state = {
            validation:{
                email: false,
                userName: false,
                password: false,
                mobile: false,
                otp: false
            },
            disableButton: true
        }
    }

    verifyDataToGenerateOTP = () =>{
        if(!document.getElementById('email').value){
            let temp = Object.assign({},this.state);
            temp.validation.email = true;
            this.setState({
                validation : temp.validation,
            })
            return false;
        }else{
            let temp = Object.assign({},this.state);
            temp.validation.email = false;
            this.setState({
                validation : temp.validation,
            })
        }
        if(!document.getElementById('countrycode').value || !document.getElementById('mobile').value){
            let temp = Object.assign({},this.state);
            temp.validation.mobile = true;
            this.setState({
                validation : temp.validation,
            });
            return false;
        }else{
            let temp = Object.assign({},this.state);
            temp.validation.mobile = false;
            this.setState({
                validation : temp.validation,
            });
            return true;
        }
    }
    // Function will decide the enabling and desabeling of the submit button.
    verifyAllValidations = (event, fromOtp) =>{
        let val = typeof(event) === 'string' ? event : event.target.value;
        let from = typeof(event) === 'string' ? fromOtp: event.target.id;
        
        switch(from){
            case 'email':
                this.validation.email = (this.checkForVal(val)) ?  true : false;
            break;
            case 'password':
                this.validation.password = this.checkForVal(val) ?  true : false;
            break;
            case 'countrycode':
                this.validation.countrycode = this.checkForVal(val) ?  true : false;
            break;
            case 'mobile':
                this.validation.mobile = this.checkForVal(val) ?  true : false;
            break;
            case 'OTP':
                this.validation.otp = this.checkForVal(val) ?  true : false;
            break;
            default :
            break;
        }
        if(this.validation.email && this.validation.password && this.validation.countrycode && this.validation.mobile && this.validation.otp){
            this.setState({disableButton: false});
        }
    }

    checkForVal = (val) =>{
        if(val.length > 0){
            return true;
        }else{
            return false;
        }
    }

    verifyMobileNumber = () => {
        if(this.verifyDataToGenerateOTP()){
            axios.post(`${serviceUrl}/registerPhone`, {
                'user':{
                    email: document.getElementById('email').value,
                    cellphone: document.getElementById('mobile').value,
                    country_code: document.getElementById('countrycode').value,
                }  
            })
            .then(function (response) {
                console.log(response);
                localStorage.userId = response && response.data && response.data.userId ? response.data.userId : '';
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    submitUserData = () =>{
        axios.post(`${serviceUrl}/register`, {
            username: document.getElementById('username').value,
            password:document.getElementById('password').value,
            email: document.getElementById('email').value,
            cellphone: document.getElementById('mobile').value,
            country_code: document.getElementById('countrycode').value,
          })
          .then( (response) => {
            this.props.history.push('/login');
            console.log(response);
          })
          .catch( (error) => {
            console.log(error);
          });
    }

    verifyOTPNumber = () => {
        //this.verifyAllValidations(document.getElementById('otp').value, 'OTP');
        if(!document.getElementById('otp').value){
            let temp = Object.assign({},this.state);
            temp.validation.otp = true;
            this.setState({
                validation : temp.validation,
            })
            return;
        }
        axios.get(`${serviceUrl}/getCellData`, {
            params: {
                otp: document.getElementById('otp').value,
                userId: localStorage.userId 
            }
        })
        .then( (response) => {
            console.log(response);
            if(response.data && response.data.success){
                let temp = Object.assign({},this.state);
                temp.validation.otp = false;
                this.setState({
                    validation : temp.validation,
                })
                this.verifyAllValidations(document.getElementById('otp').value, 'OTP');
            }else{
                let temp = Object.assign({},this.state);
                temp.validation.otp = true;
                this.setState({
                    validation : temp.validation,
                })
                return;
            }
        })
        .catch( (error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <RenderStartPage/>
                <div className="col-sm-5 static-form">

                    <Input
                        isValidation = {this.state.validation.email}
                        divClass = 'form-group'
                        labelText = 'Email'
                        id = 'email'
                        placeholdereText = 'Enter email'
                        type = 'email'
                        inputClass = 'form-control'
                        validationMessage = 'Enter valid email Id.'
                        eventHandler = {this.verifyAllValidations}
                    />
                    <Input
                        divClass = 'form-group'
                        labelText = 'Username'
                        id = 'username'
                        placeholdereText = 'Enter username'
                        type = 'text'
                        inputClass = 'form-control'
                        isValidation = {this.state.validation.username} 
                        validationMessage = 'Enter valid username.'
                        eventHandler = {this.verifyAllValidations}
                    />
                    <Input
                        divClass = 'form-group'
                        labelText = 'Password'
                        id = 'password'
                        placeholdereText = 'Enter password'
                        type = 'text'
                        inputClass = 'form-control'
                        isValidation = {this.state.validation.password} 
                        validationMessage = 'Enter valid password.'
                        eventHandler = {this.verifyAllValidations}
                    />
                    <Input
                        divClass = 'form-group'
                        labelText = 'Mobile no and Country code'
                        id = 'mobile'
                        placeholdereText = 'Enter mobile'
                        type = 'text'
                        inputClass = 'form-control'
                        isValidation = {this.state.validation.mobile} 
                        validationMessage = 'Enter valid mobile number and country code.'
                        displayCountryCode = {true}
                        countrycode  = 'countrycode'
                        placeholdereTextCountryCode = 'Ex. 91'
                        inputClassCountryCode = 'inputClassCountryCode'
                        inputClassMobile = 'inputClassMobile'
                        eventHandler = {this.verifyAllValidations}
                    />
                    <Button divClass='form-group' 
                        buttonClass='btn btn-default button-margin' 
                        eventHandler={this.verifyMobileNumber} 
                        buttonText='Verify Mobile'
                        spanText='Click on button to verify Mobile.'
                    />
                    <Input
                        divClass = 'form-group'
                        labelText = 'OTP'
                        id = 'otp'
                        placeholdereText = 'Enter otp'
                        type = 'text'
                        inputClass = 'form-control'
                        isValidation = {this.state.validation.otp} 
                        validationMessage = 'Enter valid otp number.'
                        eventHandler = {this.verifyAllValidations}
                    />
                    <Button divClass='form-group' 
                        buttonClass='btn btn-default button-margin' 
                        eventHandler={this.verifyOTPNumber} 
                        buttonText='Verify OTP'
                        spanText='Click on button to verify OTP.'
                    />
                    <Button divClass='form-group' 
                        buttonClass='btn btn-primary button-margin' 
                        disableButton = {this.state.disableButton}
                        eventHandler={this.submitUserData} 
                        buttonText='Submit'
                    />
                </div>
            </div>
        );
    }
}

export default UserRegistration;
import React, { Component } from 'react';
import DashBoardURLComponent from "../Component/DashBoardURLComponent";
import { AuthConsumer } from '../Utility/Context-Utility/AuthContext';
import LoadPostData from "./LoadPostData";
class LoadPostComponent extends Component {
    render() {
        return (
            <div>
                <AuthConsumer>
                    {({checkForValidSession})=>{
                        return (
                            checkForValidSession() ? <div><DashBoardURLComponent/> <LoadPostData/> </div> :this.props.history.push('/login')
                        )
                    }}
                </AuthConsumer>
            </div>
        );
    }
}

export default LoadPostComponent;
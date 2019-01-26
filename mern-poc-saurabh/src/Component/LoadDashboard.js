import React, { Component } from 'react';
import DashBoardURLComponent from "./DashBoardURLComponent";
import { AuthConsumer } from "../Utility/Context-Utility/AuthContext";
class LoadDashboard extends Component {

    render() {
        return (
            <div>
                <AuthConsumer>
                    {({checkForValidSession})=>{
                        return (
                            checkForValidSession() ? <DashBoardURLComponent/> : this.props.history.push('/login')
                        )
                    }}
                </AuthConsumer>
            </div>
        );
    }
}

export default LoadDashboard;
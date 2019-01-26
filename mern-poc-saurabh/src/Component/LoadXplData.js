import React from 'react';
import DashBoardURLComponent from "../Component/DashBoardURLComponent";
import { AuthConsumer } from '../Utility/Context-Utility/AuthContext';
const LoadXplData = (props) => {
    return (
        <div>
           <AuthConsumer>
                {({checkForValidSession})=>{
                    return (
                        checkForValidSession() ? <DashBoardURLComponent/> : props.history.push('/login')
                    )
                }}
            </AuthConsumer>
        </div>
    );
};

export default LoadXplData;
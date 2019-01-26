import React from 'react';
import DashBoardURLComponent from "./DashBoardURLComponent";
import { AuthConsumer } from '../Utility/Context-Utility/AuthContext';
const LoadExtentiaExnet = (props) => {
    return ( <div>
           <AuthConsumer>
                {({checkForValidSession})=>{
                    return (
                        checkForValidSession() ? <DashBoardURLComponent/> : props.history.push('/login')
                    )
                }}
            </AuthConsumer>
       
    </div> );
}
 
export default LoadExtentiaExnet;
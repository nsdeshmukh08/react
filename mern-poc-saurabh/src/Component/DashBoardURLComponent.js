import React from "react";
import {dashBoardRoutes} from '../Utility/RoutesUtility';
import { Link } from "react-router-dom";
const DashBoardURLCompoent = () => {
    return ( 
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" href="#" to='/extentiaexnet'>Extentia Exnet</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        {
                            dashBoardRoutes.map(routeObj => {
                                return <li key={routeObj.route}><Link to={routeObj.route}>{routeObj.routeText}</Link></li>
                            })
                        }
                    </ul>
            </div>
        </nav>
     );
}
 
export default DashBoardURLCompoent;


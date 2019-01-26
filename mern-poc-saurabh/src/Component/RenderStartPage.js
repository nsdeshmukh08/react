import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class RenderStartPage extends Component {

    render() {
        return (
            <div>
                <div className='header'>
                    <div className="header-right">
                        <Link to="/login" className="btn btn-primary">Login</Link>
                        <Link to="/userregistration" className="btn btn-primary button-margin-login-button" >Register</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default RenderStartPage;
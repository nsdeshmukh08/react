import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from "../Actions/index_Action";
class LoadPostData extends Component {
    render() {
        return (
            <div>
                Posts Data
            </div>
        );
    }

    componentDidMount(){
        this.props.fetchPosts();
    }
}



export default connect(null, {fetchPosts})(LoadPostData);
import {actions} from "../Utility/ActionUtility";
import { serviceUrl, serviceUrlPost, API_KEY, serviceUtilityPost, serviceUtility } from "../Utility/ServiceUtility";
import axios from "axios";

export function fetchPosts(){
    const request = axios.get(`${serviceUrlPost}${serviceUtilityPost.POSTS}${API_KEY}`);
    return{
        type: actions.FETCH_POSTS,
        payload: request
    }
}

export function fetchEvents(userId){
    const request = axios.get(`${serviceUrl}${serviceUtility.GETALLEVENTSDATA_WEBSERVE}`,{
        params:{
            userId: userId
        }
    });
    return{
        type: actions.FETCH_EVENTS_DATA,
        payload: request
    }
}

export function registerUserToEvent(eventId, empId){
    const request = axios.put(`${serviceUrl}${serviceUtility.REGISTER_USER_TO_EVENT_WEBSERVE}`,{
        eventId: eventId,
        userId: empId
    });
    return{
        type: actions.REGISTER_USER_TO_EVENT,
        payload: request
    }
}

export function fetchLoginUser(email, password){
    const request  = axios.post(`${serviceUrl}${serviceUtility.LOGIN_WEBSERVE}`,{
        email: email,
        password: password
    });
    return{
        type: actions.FETCH_LOGIN_CRED,
        payload: request
    }
}
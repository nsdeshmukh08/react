import React, { Component } from 'react';
import {connect} from 'react-redux';
import DashBoardURLComponent from "../Component/DashBoardURLComponent";
import { AuthConsumer } from '../Utility/Context-Utility/AuthContext';
import LoadEventList from '../Component/LoadEventList';
import {fetchEvents, registerUserToEvent} from '../Actions/index_Action';
class LoadEventsData extends Component {
    constructor(props){
        super(props);
        this.state ={
            events : [],
            empId : ''
        }
    }

    applyForEventHaldler = ({_id}, e) => {
        //console.log(userInformation);
        const empId = JSON.parse(localStorage.storeSessionInfo)._id;
        const eventId = _id;
        this.props.registerUserToEvent(eventId, empId)
        .then(()=>{
            //console.log(this.props.registerUserReducer)
            if(this.props.registerUserReducer.auth === false){
                alert(this.props.registerUserReducer.message);
            }
        });
    }

    render() {
        return (
            <AuthConsumer>
                {({checkForValidSession})=>(
                    checkForValidSession() ? <div> <DashBoardURLComponent/> <LoadEventList empId = {this.state.empId} eventList = {this.state.events} eventHanlder = {this.applyForEventHaldler}/> </div>:this.props.history.push('/login')
                )}
            </AuthConsumer>
        );
    }

    componentDidMount(){
        this.props.fetchEvents(JSON.parse(localStorage.storeSessionInfo)._id)
        .then(()=>{
            let eventList = JSON.parse(JSON.stringify(this.props.events))
            eventList = this.mapEventDataToUser(eventList)
            .then((data) => {
                this.setState({
                    events : data,
                    empId : JSON.parse(localStorage.storeSessionInfo)._id
                })
            });
           
        });
    }

    mapEventDataToUser = (events) =>{

        return new Promise((resolve, reject) =>{
            let j =0;
            resolve(events.Events.map((event,i,arr) => {
                if(j < events.UserEvents.length){
                    if(events.UserEvents && events.UserEvents[j] && events.UserEvents[j].eventId && event._id === events.UserEvents[j].eventId){
                        event.empId = events.UserEvents[j].userId;
                    }
                    j++;
                    return event;
                }else{
                    j=0;
                    return event;	
                }
            }))
        })

        
    }
}

function mapStateToProps({events,registerUserReducer}){
    return{
        events : events,
        registerUserReducer : registerUserReducer
    }
}

export default connect(mapStateToProps, {fetchEvents , registerUserToEvent})(LoadEventsData);
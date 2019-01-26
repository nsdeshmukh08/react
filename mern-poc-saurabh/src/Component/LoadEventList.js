import React from 'react';
import img from '../Images/Barayan.jpg';
const LoadEventList = (props) => {
    if(!props.eventList || props.eventList.length <= 0){
        return <div>Loading...</div>
    }
    return (
        <div>
            {   
                props.eventList.map((eventObject,i,arr)=>{
                    return <div key ={eventObject._id} className="eventParentDivClass">
                        <div className="imageDivClass"> 
                            <img height="80" width="60" src={img}/>
                        </div>
                        <div className='eventInformation'> 
                            <h3> {eventObject.eventType} - {eventObject.eventName ? eventObject.eventName : '-'}</h3>
                            <div>
                               {eventObject.eventDescription}
                            </div>
                            <br></br>
                            <div className="">
                                <span><strong>Date</strong> : {eventObject.eventDate}</span>
                                <span><strong> Time</strong> :{eventObject.eventTime}</span>
                                <button className={ eventObject.empId === props.empId ? 'btn btn-primary enrollButton disabled' : 'btn btn-primary enrollButton'} onClick={(e)=>{props.eventHanlder(eventObject,e)}}> Enroll for event</button>
                            </div>
                        </div>
                    </div>
                })
                
            }
            
        </div>
    );
};

export default LoadEventList;
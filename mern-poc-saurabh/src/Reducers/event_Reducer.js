import {actions} from "../Utility/ActionUtility";

export default function(state = {}, action){
    switch(action.type){
        case actions.FETCH_EVENTS_DATA: 
            if(action && action.payload && action.payload.data){
                return action.payload.data;
            }else{
                return {};
            }
        default:
            return state;
    }
}
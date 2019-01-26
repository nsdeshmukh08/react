import {actions} from "../Utility/ActionUtility";

export default function(state = {}, action){
    switch(action.type){
        case actions.REGISTER_USER_TO_EVENT:
            console.log(JSON.stringify(action.payload.data));
            return  action.payload.data;
        default:
            return state;
    }
}
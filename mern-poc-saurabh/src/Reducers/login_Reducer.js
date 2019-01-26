import {actions} from "../Utility/ActionUtility";

export default function(state = {}, action){
    switch(action.type){
        case actions.FETCH_LOGIN_CRED: 
            console.log(" 1 ++++> " + action.payload.data);
            if(action && action.payload && action.payload.data){
                console.log(action.payload.data);
                return action.payload.data;
            }else{
                return {};
            }
            
        default:
            return state;
    }
}
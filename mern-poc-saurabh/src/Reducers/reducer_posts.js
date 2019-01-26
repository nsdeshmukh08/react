import _ from 'lodash'
import {actions} from "../Utility/ActionUtility";

export default function(state = {}, action){
    switch(action.type){
        case actions.FETCH_POSTS: 
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
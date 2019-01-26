import { combineReducers } from "redux";
import PostsReducers from './reducer_posts';
import LoginReducer from "./login_Reducer";
import EventReducer from "./event_Reducer";
import registerUserReducer from "./registerUser_Reducer";
const rootReducers = combineReducers({
    posts: PostsReducers,
    loginCreds: LoginReducer,
    events: EventReducer,
    registerUserReducer : registerUserReducer
});

export default rootReducers;
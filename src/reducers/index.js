import { combineReducers } from "redux";
import pollsReducers from "./pollsReducers";

const rootReducers = combineReducers({
    polls : pollsReducers,
})

export default rootReducers;
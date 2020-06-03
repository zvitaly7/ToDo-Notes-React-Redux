import {combineReducers} from "redux";
import tasks from './tasks'
import {modals} from "./modal";


const rootReducer = combineReducers({tasks, modals});

export default rootReducer;
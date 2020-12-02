import {createStore,combineReducers} from 'redux'
import userReducer from '../reducers/r-users'
import studentsReducer from '../reducers/r-students'

const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        // students:studentsReducer
    }))
    return store
}

export default configureStore
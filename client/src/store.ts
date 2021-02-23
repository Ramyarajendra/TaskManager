import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { addTaskReducer, getTasksReducer} from './reducers/taskReducers'

const reducer = combineReducers({
    getTasks : getTasksReducer,
    addTasks: addTaskReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export type RootStore = ReturnType<typeof reducer>

export default store
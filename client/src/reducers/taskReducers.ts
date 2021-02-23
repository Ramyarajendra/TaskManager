import { AddTaskDispatch, ADD_TASKS_FAIL, ADD_TASKS_REQUEST, ADD_TASKS_SUCCESS, GetTaskDispatch, GET_TASKS_FAIL, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, ITask } from "../actions/TaskActionTypes"

interface GetTaskInitalStateI {
    tasks: ITask[] | [],
    loading: boolean,
    error?: any
}


const initialState: GetTaskInitalStateI = {
    tasks: [],
    loading: false
}

export const getTasksReducer = (state: GetTaskInitalStateI = initialState, action: GetTaskDispatch): GetTaskInitalStateI => {
    switch (action.type) {
        case GET_TASKS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_TASKS_SUCCESS:
            return{
                ...state,
                tasks: action.payload,
                loading: false
            }
        case GET_TASKS_FAIL:
            return{
                tasks: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

interface AddInitialStateI {
    task: ITask | {},
    loading?: boolean,
    error?: any
}

export const addTaskReducer = (state: AddInitialStateI = { task : {}}, action: AddTaskDispatch): AddInitialStateI => {
    switch (action.type) {
        case ADD_TASKS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case ADD_TASKS_SUCCESS:
            return{
                ...state,
                task: action.payload,
                loading: false
            }
        case ADD_TASKS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


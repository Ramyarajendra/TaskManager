import { AddTaskDispatch, ADD_TASKS_FAIL, ADD_TASKS_REQUEST, ADD_TASKS_SUCCESS, DeleteTaskDispatch, DELETE_TASKS_FAIL, DELETE_TASKS_REQUEST, DELETE_TASKS_SUCCESS, GetTaskDispatch, GET_TASKS_FAIL, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, ITask, UpdateTaskDispatch, UPDATE_TASKS_FAIL, UPDATE_TASKS_REQUEST, UPDATE_TASKS_SUCCESS } from "../actions/TaskActionTypes"

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

interface AddOrUpdateInitialStateI {
    task: ITask | {},
    loading?: boolean,
    error?: any
}

export const addTaskReducer = (state: AddOrUpdateInitialStateI = { task : {}}, action: AddTaskDispatch): AddOrUpdateInitialStateI => {
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

export const updateTaskReducer = (state: AddOrUpdateInitialStateI = { task : {}}, action: UpdateTaskDispatch): AddOrUpdateInitialStateI => {
    switch (action.type) {
        case UPDATE_TASKS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case UPDATE_TASKS_SUCCESS:
            return{
                ...state,
                task: action.payload,
                loading: false
            }
        case UPDATE_TASKS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

interface DeleteTaskI {
    success?: boolean,
    error?:any,
    loading?:boolean
}

export const deleteTaskReducer = (state:DeleteTaskI = {}, action: DeleteTaskDispatch):DeleteTaskI => {
    switch (action.type) {
        case DELETE_TASKS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case DELETE_TASKS_SUCCESS:
            return{
                ...state,
                success: true,
                loading: false
            }
        case DELETE_TASKS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

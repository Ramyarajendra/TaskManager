import { GetTaskDispatch, GET_TASKS_FAIL, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, ITask } from "../actions/TaskActionTypes"

interface InitalStateI {
    tasks: ITask[] | [],
    loading: boolean,
    error?: any
}


const initialState: InitalStateI = {
    tasks: [],
    loading: false
}

export const getTasksReducer = (state: InitalStateI = initialState, action: GetTaskDispatch): InitalStateI => {
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


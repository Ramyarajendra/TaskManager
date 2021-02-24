import axios from 'axios'
import {Dispatch} from 'redux'
import { GET_TASKS_REQUEST, GET_TASKS_SUCCESS, GET_TASKS_FAIL, GetTaskDispatch, AddTaskDispatch, ADD_TASKS_SUCCESS, ITask, ADD_TASKS_REQUEST, ADD_TASKS_FAIL , UpdateTaskDispatch, UPDATE_TASKS_REQUEST, UPDATE_TASKS_SUCCESS, UPDATE_TASKS_FAIL} from './TaskActionTypes'


export const getTasks = () => async (dispatch: Dispatch<GetTaskDispatch>) => {
    try {
        dispatch({
            type: GET_TASKS_REQUEST
        })
        const {data} = await axios.get('/api/tasks')
        dispatch({
            type: GET_TASKS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_TASKS_FAIL,
            payload: error.response.data
        })
    }
}

export const addTasks = (task: ITask) => async (dispatch: Dispatch<AddTaskDispatch>) => {
    try {
        dispatch({
            type: ADD_TASKS_REQUEST
        })
        const {data} = await axios.post('/api/tasks', task)
        dispatch({
            type: ADD_TASKS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_TASKS_FAIL,
            payload: error.response.data
        })
    }
}

export const updateTasks = (task: ITask) => async (dispatch: Dispatch<UpdateTaskDispatch>) => {
    try {
        dispatch({
            type: UPDATE_TASKS_REQUEST
        })
        const {data} = await axios.post(`/api/tasks/${task._id}`, task)
        dispatch({
            type: UPDATE_TASKS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_TASKS_FAIL,
            payload: error.response.data
        })
    }
}
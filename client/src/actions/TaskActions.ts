import axios from 'axios'
import {Dispatch} from 'redux'
import { GET_TASKS_REQUEST, GET_TASKS_SUCCESS, GET_TASKS_FAIL, GetTaskDispatch } from './TaskActionTypes'


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
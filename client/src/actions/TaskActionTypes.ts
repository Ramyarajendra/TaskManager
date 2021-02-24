export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST'
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS'
export const GET_TASKS_FAIL = 'GET_TASKS_FAIL'

export const ADD_TASKS_REQUEST = 'ADD_TASKS_REQUEST'
export const ADD_TASKS_SUCCESS = 'ADD_TASKS_SUCCESS'
export const ADD_TASKS_FAIL = 'ADD_TASKS_FAIL'

export const UPDATE_TASKS_REQUEST = 'UPDATE_TASKS_REQUEST'
export const UPDATE_TASKS_SUCCESS = 'UPDATE_TASKS_SUCCESS'
export const UPDATE_TASKS_FAIL = 'UPDATE_TASKS_FAIL'

export const DELETE_TASKS_REQUEST = 'DELETE_TASKS_REQUEST'
export const DELETE_TASKS_SUCCESS = 'DELETE_TASKS_SUCCESS'
export const DELETE_TASKS_FAIL = 'DELETE_TASKS_FAIL'
export interface ITask {
    _id?: string
    name: string
    description: string
    status?: boolean
    createdAt?: string
    updatedAt?: string
  }
  

export interface TaskRequest {
    type: typeof GET_TASKS_REQUEST | typeof ADD_TASKS_REQUEST | typeof UPDATE_TASKS_REQUEST | typeof DELETE_TASKS_REQUEST
}

export interface TaskFail {
    type: typeof GET_TASKS_FAIL | typeof ADD_TASKS_FAIL | typeof UPDATE_TASKS_FAIL | typeof DELETE_TASKS_FAIL,
    payload: any
}


// GetTask successs & dispatch
export interface GetTaskSuccess {
    type: typeof GET_TASKS_SUCCESS,
    payload: ITask[]
}
export type GetTaskDispatch = TaskFail | TaskRequest | GetTaskSuccess


//AddTask success &  Dispatch
export interface AddTaskSuccess {
    type: typeof ADD_TASKS_SUCCESS,
    payload: ITask
}


export type AddTaskDispatch = TaskFail | TaskRequest | AddTaskSuccess


//UpdateTask success & Dispatch

export interface UpdateTaskSuccess {
    type: typeof UPDATE_TASKS_SUCCESS,
    payload: ITask
}


export type UpdateTaskDispatch = TaskFail | TaskRequest | UpdateTaskSuccess

//DeleteTask success & Dispatch

export interface DeleteTaskSuccess {
    type: typeof DELETE_TASKS_SUCCESS
}


export type DeleteTaskDispatch = TaskFail | TaskRequest | DeleteTaskSuccess

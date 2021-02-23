export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST'
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS'
export const GET_TASKS_FAIL = 'GET_TASKS_FAIL'


export interface ITask {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
  }
  

export interface GetTaskRequest {
    type: typeof GET_TASKS_REQUEST
}
export interface GetTaskSuccess {
    type: typeof GET_TASKS_SUCCESS,
    payload: ITask[]
}
export interface GetTaskFail {
    type: typeof GET_TASKS_FAIL,
    payload: any
}

export type GetTaskDispatch = GetTaskFail | GetTaskRequest | GetTaskSuccess
import {Request, Response} from 'express'
import Task from '../models/taskModel'
import {ITask} from '../types/taskType'

const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks: ITask[] = await Task.find({})
        res.json(tasks)
    } catch (error) {
        throw error
    }
}

const addTask = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITask, "name" | "description" | "status">
        const task: ITask = new Task({
            name: body.name,
            description: body.description,
            status: body.status
        })
        const newTask: ITask = await task.save()
        res.status(201).json(newTask)
    } catch (error) {
        throw error
    }
}

const updateTask = async(req: Request, res: Response): Promise<void> => {
    try {
        const {params:{ id }} = req
        const body = req.body as Pick<ITask, "name" | "description" | "status">
        const task :ITask | null = await Task.findById(id)
        if(task){
            task.name = body.name || task.name,
            task.description = body.description || task.description,
            task.status = body.status

            const updatedTask = await task.save()
            res.json(updatedTask)
        }else{
            res.status(404)
            throw new Error("Task not found")
        }
    } catch (error) {
        throw error
    }
}

const deleteTask = async(req: Request, res: Response) : Promise<void> => {
    try {
        const {params:{ id }} = req
        const task :ITask | null = await Task.findById(id)
        if(task){
            await task.remove()
            res.json({message: "Todo Deleted"})
        }else{
            res.status(404)
            throw new Error("Task not found")
        }
    } catch (error) {
        throw error
    }
}

export {getTasks, deleteTask, updateTask, addTask}
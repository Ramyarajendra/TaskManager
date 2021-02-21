import {Router} from 'express'
import { addTask, deleteTask, getTasks, updateTask } from '../controllers/taskController'

const router: Router = Router()

router.route('/').get(getTasks).post(addTask)

router.route('/:id').put(updateTask).delete(deleteTask)

export default router
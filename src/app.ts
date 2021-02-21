import express, {Express} from 'express'
import taskRoutes from './routes/taskRoutes'
import dotnev from 'dotenv'
import connectDB from './config/db'

dotnev.config()

connectDB()

const app: Express = express()

app.use(express.json())

const PORT : string | number = process.env.PORT || 5000

app.use('/api/tasks', taskRoutes)





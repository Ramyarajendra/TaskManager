import React, { useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from '../actions/TaskActions'
import { ITask } from '../actions/TaskActionTypes'
import { RootStore } from '../store'
import AddTask from './AddTask'

const TaskList = () => {
    const dispatch = useDispatch()

    const taskfromStore = useSelector((state : RootStore) => state.getTasks)
    const { tasks} = taskfromStore

    useEffect(()=> {
        dispatch(getTasks())
    },[dispatch])

    return (
        <Container className='my-3'>
            <AddTask/>
            {(tasks as Array<ITask>).map((task: ITask)=> (
                <Card className='mb-3'>
                <Card.Body>
                  <Card.Title className='text-warning'>{task.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Status: {task.status ? "Completed" : "In Progress"}</Card.Subtitle>
                  <Card.Text>
                    {task.description}
                  </Card.Text>
                  <Button variant='outline-success'>Edit</Button>
                </Card.Body>
              </Card>
            ))}
        </Container>
    )
}

export default TaskList

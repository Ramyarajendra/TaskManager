import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Container, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from '../actions/TaskActions'
import { ITask } from '../actions/TaskActionTypes'
import { RootStore } from '../store'
import AddTask from './AddTask'

const TaskList = () => {
    const dispatch = useDispatch()

    const taskfromStore = useSelector((state : RootStore) => state.getTasks)
    const { tasks} = taskfromStore
    const addTaskFromStore = useSelector((state : RootStore) => state.addTask)

    const [show, setShow] = useState(false);
    
    const [editId, setEditId] = useState<string | undefined>('')
    const [editName, setEditName] = useState('')
    const [editDesc, setEditDesc] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = (task : ITask) => {
      setShow(true)
      setEditId(task._id)
      setEditName(task.name)
      setEditDesc(task.description)
    }
  
    const onUpdate = () => {
      console.log('update')
    }

    useEffect(()=> {
        dispatch(getTasks())
    },[dispatch, addTaskFromStore])

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
                  <div className='d-flex justify-content-between align-items-center'>
                    { task.status ? 
                      <div>
                        <Badge pill className='p-2' variant='success'>Completed</Badge>
                      </div>
                    :
                      <Button variant='outline-success' >Mark as Complete</Button> 
                    }
                    
                    <Button variant='outline-success' onClick={() => handleShow(task)}>Edit</Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
              <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                  centered>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                    <Form.Control 
                      style={{backgroundColor : 'grey'}} 
                      type="text" 
                      placeholder="Enter Name" 
                      value={editName} 
                      onChange={(e)=> setEditName(e.target.value)}
                    />
                    <br />
                    <Form.Control 
                      style={{backgroundColor : 'grey'}} 
                      as='textarea' 
                      rows={3} 
                      placeholder="Enter Description" 
                      value={editDesc}
                      onChange={(e)=> setEditDesc(e.target.value)}
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={onUpdate}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
        </Container>
    )
}

export default TaskList

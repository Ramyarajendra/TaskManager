import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Container, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTasks, getTasks, updateTasks } from '../actions/TaskActions'
import { ITask } from '../actions/TaskActionTypes'
import { RootStore } from '../store'
import AddTask from './AddTask'

const TaskList = () => {
    const dispatch = useDispatch()

    const taskfromStore = useSelector((state : RootStore) => state.getTasks)
    const { tasks} = taskfromStore
    const addTaskFromStore = useSelector((state : RootStore) => state.addTask)

    const updateTaskFromStore = useSelector((state : RootStore) => state.updateTask)
    const deleteTaskFromStore = useSelector((state : RootStore) => state.deleteTask)
    const { success} = deleteTaskFromStore


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
      dispatch(updateTasks({
        _id : editId,
        name: editName,
        description: editDesc
      }))
      handleClose()
    }
    const onStatusUpdate = (task: ITask) => {
      if(window.confirm("Sure?")){
        dispatch(updateTasks({
        ...task,
        status: true
        }))
      }
    }
    const onDelete = (id: any) => {
      if(window.confirm("Do you want to delete?")){
        dispatch(deleteTasks(id))
      }
    }


    useEffect(()=> {
        dispatch(getTasks())
    },[dispatch, addTaskFromStore, updateTaskFromStore, success])

    return (
        <Container className='my-3'>
            <AddTask/>
            {(tasks as Array<ITask>).map((task: ITask)=> (
                <Card className='mb-3'>
                <Card.Body>
                  <Card.Title className='text-warning'>
                    <div className='d-flex justify-content-between align-items-center'>
                      {task.name}
                      <Button onClick={() => onDelete(task._id)}><i className='fa fa-trash fa-lg'></i></Button>
                    </div>
                  </Card.Title>
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
                      <Button variant='outline-success' onClick={() => onStatusUpdate(task)}>Mark as Complete</Button> 
                    }
                    
                    {!task.status && <Button variant='outline-success' onClick={() => handleShow(task)}>Edit</Button>}
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

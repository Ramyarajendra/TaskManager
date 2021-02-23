import React, { MouseEvent, useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTasks } from '../actions/TaskActions'

const AddTask = () => {
    const [name, setName] = useState<string>('')
    const [desc, setDesc] = useState<string>('')

    const dispatch = useDispatch()

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(addTasks({name, description: desc}))
        setName('')
        setDesc('')
    }
    return (
        <div className='p-3 my-3 bg-secondary'>
            <InputGroup>
                <FormControl style={{backgroundColor : 'grey'}} placeholder='Enter Name' value={name}
                onChange={(e)=> setName(e.target.value)}/>
                <FormControl style={{backgroundColor : 'grey'}} placeholder='Enter Description' value={desc} 
                onChange={(e)=> setDesc(e.target.value)}/>
                <InputGroup.Append>
                    <Button variant="outline-info" onClick={handleClick}>Add Task</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default AddTask

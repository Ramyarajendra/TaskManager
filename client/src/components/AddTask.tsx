import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

const AddTask = () => {
    return (
        <div className='p-3 my-3 bg-secondary'>
            <InputGroup>
                <FormControl style={{backgroundColor : 'grey'}} placeholder='Enter Name'/>
                <FormControl style={{backgroundColor : 'grey'}} placeholder='Enter Description'/>
                <InputGroup.Append>
                    <Button variant="outline-info">Add Task</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default AddTask

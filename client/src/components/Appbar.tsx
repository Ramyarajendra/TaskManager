import React from 'react'
import { Navbar } from 'react-bootstrap'

const Appbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <i className="fa fa-tasks mr-2" aria-hidden="true"></i>
                Task Manager
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Appbar

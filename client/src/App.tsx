import React from 'react';
import './App.css';
import Appbar from './components/Appbar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <TaskList/>
    </div>
  );
}

export default App;

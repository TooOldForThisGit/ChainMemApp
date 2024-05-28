import React, { useState } from 'react';
import './App.css';

//test dnd
import {DndContext, closestCorners} from "@dnd-kit/core"
import { Column } from './components/Column/Column';

function App() {

  const [subjects, setSubjects] = useState([
      {id:1, title: "A" },
      {id:2, title: "B" },
      {id:3, title: "C" },
    ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ChainMemApp
        </h1>
      </header>
    
        <h2> Order</h2>
        <DndContext collisionDetection={closestCorners}>
          <Column subjects={subjects}/>
        </DndContext>
     
      
    </div>
  );
}

export default App;

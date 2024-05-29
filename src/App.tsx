import React, { useState } from 'react';
import './App.css';
import { DndContext, closestCorners, DragEndEvent, UniqueIdentifier, useSensor, useSensors, PointerSensor, KeyboardSensor, TouchSensor } from "@dnd-kit/core";
import { Column } from './components/Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';



export default function App() {
  const [subjects, setSubjects] = useState([
    {id: 1, title: "A"},
    {id: 2, title: "B"},
    {id: 3, title: "C"},
  ]);

  const getSubjectPosition = (id: UniqueIdentifier) => {
    return subjects.findIndex(subject => subject.id === id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const originalPosition = getSubjectPosition(active.id);
      const newPosition = getSubjectPosition(over.id);

      setSubjects(subjects => arrayMove(subjects, originalPosition, newPosition));
    }
  };
const sensors = useSensors(
  useSensor(PointerSensor),
  useSensor(TouchSensor),
  useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates
  }),

)

  return (
    <div className="App">
      <header className="App-header">
        <h1>ChainMemApp</h1>
      </header>
      <h2>Order</h2>
      <DndContext 
        sensors={sensors}
        onDragEnd={handleDragEnd} 
        collisionDetection={closestCorners}>
        <Column subjects={subjects} />
      </DndContext>
    </div>
  );
}

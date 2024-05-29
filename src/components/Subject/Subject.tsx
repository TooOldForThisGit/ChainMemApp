import React from 'react';
import './Subject.css';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { ISubject } from '../../interfaces/ISubject';

export const Subject: React.FC<ISubject> = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div 
      ref={setNodeRef} 
      {...attributes}
      {...listeners}
      style={style}
      className="subject">
      {title}
    </div>
  );
};

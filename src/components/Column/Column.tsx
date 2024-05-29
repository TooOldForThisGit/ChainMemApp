import './Column.css';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

import { Subject } from '../Subject/Subject';
import { ISubject, ISubjects } from '../../interfaces/ISubject';

export const Column: React.FC<ISubjects> = ({ subjects }) => {
    return (
      <div className="column" style={{ marginInline: "auto" }}>
        <SortableContext items={subjects} strategy={verticalListSortingStrategy}>
          {subjects.map((subject: ISubject) => (
            <Subject key={subject.id} id={subject.id} title={subject.title} />
          ))}
        </SortableContext>
      </div>
    );
  };


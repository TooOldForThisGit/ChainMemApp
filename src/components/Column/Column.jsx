import './Column.css';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

export const Column = ({subjects}) => {
    return (

            <div className="column" style={{ maxWidth: "fit-content", marginInline: "auto"}}>
                <SortableContext items={subjects} strategy={verticalListSortingStrategy}>
                    {subjects.map(subject => 
                    <div key={subject.id}>{subject.title}</div>)}
                </SortableContext>
            </div>

    );
};


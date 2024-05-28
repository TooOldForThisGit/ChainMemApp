import './Subject.css';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities'
export const Subject = (id : number, title : string) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

    const style = {

        transition,
        transform: CSS.Transform.toString(transform)
    }
    return (

            <div ref={setNodeRef} 
            {...attributes}
            {...listeners}
            style={style}
            className="subject">
                <input type="checkbox" className="checkbox"/>{title}
            </div>

    );
};


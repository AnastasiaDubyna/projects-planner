import { Card, CardContent, Typography } from '@mui/material';
import { useDrag } from 'react-dnd';
import { icons } from './constants';
import './taskCard.css';

const TaskCard = ({task, toggleTaskPopup}) => {
    const {type, resume, id} = task;
    const [{isDragging}, drag] = useDrag({
        type: "card",
        item: {
            type: "card",
            id: id, 
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <Card className="task-card" variant="outlined" ref={drag} role="Handle" onClick={() => toggleTaskPopup(task)}>
            <CardContent className="task-card-content">
                <Typography>{resume}</Typography>
                <div className='card-task-footer'>
                    {icons[type]}
                    <p className='card-task-id'>{id}</p>
                </div>
            </CardContent>
        </Card>
    );
    
}
 
export default TaskCard;
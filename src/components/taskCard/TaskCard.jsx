import { Card, CardContent, Typography } from '@mui/material';
import { useDrag } from 'react-dnd';
import { icons } from './constants';

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
        <Card variant="outlined" ref={drag} role="Handle" onClick={() => toggleTaskPopup(task)}>
            <CardContent>
                <Typography>{resume}</Typography>
                {icons[type]}
            </CardContent>
        </Card>
    );
    
}
 
export default TaskCard;
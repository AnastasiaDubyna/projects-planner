import { Box } from '@mui/material';
import { nanoid } from 'nanoid';
import TaskCard from '../taskCard/TaskCard';
import './columnBody.css';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import moveTaskAction from '../../redux/actions/moveTaskAction';
import { useSelector } from 'react-redux';


const ColumnBody = ({content, stage}) => {
    const dispatch = useDispatch();
    const [{canDrop, isOver}, drop] = useDrop({
        accept: "card",
        drop: (item) => dispatch(moveTaskAction({id: item.id, newStage: stage})),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })
    return ( 
        <Box className="column-body" ref={drop}>  
            {content.map(task => <TaskCard task={task} key={nanoid()}/>)}
        </Box>
        
    );
    
}
 
export default ColumnBody;
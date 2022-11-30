import { Box } from '@mui/material';
import { nanoid } from 'nanoid';
import TaskCard from '../taskCard/TaskCard';
import './columnBody.css';

const ColumnBody = ({content}) => {
    return ( 
        <Box className="column-body">  
            {content.map(task => <TaskCard task={task} key={nanoid()}/>)}
        </Box>
        
    );
    
}
 
export default ColumnBody;
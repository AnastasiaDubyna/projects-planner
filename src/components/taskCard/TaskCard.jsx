import { Card, CardContent, Typography } from '@mui/material';
import {icons} from './constants';

const TaskCard = ({task}) => {
    const {type, resume} = task;

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography>{resume}</Typography>
                {icons[type]}
            </CardContent>
        </Card>
    );
    
}
 
export default TaskCard;
import Grid from '@mui/material/Grid';
import Column from '../column/Column';
import { stages } from './constants';
import { nanoid } from 'nanoid';
import './bodyContent.css';

const BodyContent = ({tasks}) => {
    return (
        <div className="body-content">
            <Grid container spacing={{xs: 5, sm: 5, md: 3}} justifyContent="space-around">
                {Object.keys(stages).map(
                    (stageKey) => {
                        const columnContent = tasks.filter(task => task.stage === stageKey);
                        return (
                            <Grid item xs={12} sm={6} md={3} key={nanoid()}>
                                <Column 
                                    title={stages[stageKey]} 
                                    quantity={columnContent.length} 
                                    key={nanoid()} 
                                    content={columnContent}  />
                            </Grid>
                        )
                    }
                )}
            </Grid> 
        </div>
    );
    
}
 
export default BodyContent;
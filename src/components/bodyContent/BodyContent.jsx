import Grid from '@mui/material/Grid';
import Column from '../column/Column';
import { stages } from './constants';
import { nanoid } from 'nanoid';
import './bodyContent.css';

const BodyContent = ({tasks}) => {
    return (
        <div className="body-content">
            <Grid container spacing={{xs: 5, sm: 5, md: 3}} justifyContent="space-around">
                {stages.map(
                    (stage) => {
                        const columnContent = tasks.filter(task => task.stage === stage.keyName);
                        return (
                            <Grid item xs={12} sm={6} md={3} key={nanoid()}>
                                <Column 
                                    title={stage.titleName} 
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
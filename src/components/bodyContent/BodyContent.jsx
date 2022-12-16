import Column from '../column/Column';
import { stages } from './constants';
import { nanoid } from 'nanoid';
import './bodyContent.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getTasksAction from '../../redux/actions/getTasksAction';
import { CircularProgress, Grid } from '@mui/material';

const BodyContent = ({openTaskPopup, searchValue}) => {
    const {tasks, isLoading, isLoadingError} = useSelector(state => state.handleTaskReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasksAction());
    }, []);

    if (isLoading) {
        return (
            <div className="body-content">
                <CircularProgress className='progress-icon'/>;
            </div>
        );
    } else if (isLoadingError) {
        return (
            <div className="body-content">
                <h1 className='error-message'>Oops something went wrong. Do better!</h1>
            </div>
        );
    } else {
        return (
            <div className="body-content">
                <Grid className="content-grid" container spacing={{xs: 5, sm: 5, md: 3}} justifyContent="space-around">
                    {stages.map(
                        (stage) => {
                            const columnContent = tasks.filter(
                                task => task.stage === stage.keyName && task.resume.includes(searchValue)
                            );
                            return (
                                <Grid item xs={12} sm={6} md={3} key={nanoid()}>
                                    <Column 
                                        title={stage.titleName} 
                                        quantity={columnContent.length} 
                                        key={nanoid()} 
                                        content={columnContent}
                                        stage={stage.keyName}
                                        toggleTaskPopup={openTaskPopup}  />
                                </Grid>
                            )
                        }
                    )}
                </Grid> 
            </div>
        )
    } 
}
 
export default BodyContent;
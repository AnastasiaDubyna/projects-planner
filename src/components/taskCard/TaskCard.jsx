import { Component } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import {icons} from './constants';

class TaskCard extends Component {
    constructor(props) {
        super(props);
    }

    state = {  }

    render() {
        const {type, resume, description} = this.props.task;

        return (
            <Card variant="outlined">
                <CardContent>
                    <Typography>{resume}</Typography>
                    {icons[type]}
                </CardContent>
            </Card>
        );
    }
}
 
export default TaskCard;
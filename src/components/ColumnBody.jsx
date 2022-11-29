import { Box } from '@mui/material';
import { Component } from 'react';
import TaskCard from './taskCard/TaskCard';

class ColumnBody extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const {content} = this.props;

        return ( 
            <Box
                sx={{
                    overflow: "auto",
                    height: 600,
                    padding: 1,
                    borderRadius: '5px',
                    backgroundColor: "rgb(233, 233, 233)",
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    '-ms-overflow-style': 'none',  /* IE and Edge */
                    'scrollbar-width': 'none'
                }}
            >
                
            {
                content.map(task => <TaskCard task={task} />)
            }
            </Box>
            
        );
    }
}
 
export default ColumnBody;
import { Component } from 'react';
import Grid from '@mui/material/Grid';
import Column from '../Column';

class BodyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        const {tasks} = this.props;
        return (
            <div className="body-content">
                <Grid container spacing={{xs: 5, sm: 5, md: 3}} justifyContent="space-around" justifyItems="center">
                    {Object.keys(tasks).map(
                        (title, index) => 
                            <Grid item xs={12} sm={6} md={3}>
                                <Column 
                                    title={title.replace(/([a-z0-9])([A-Z])/g, '$1 $2')} 
                                    quantity={tasks[title].length} 
                                    key={`header-${index}`} 
                                    content={tasks[title]}  />
                            </Grid>
                    )}
                </Grid>
            </div>
        );
    }
}
 
export default BodyContent;
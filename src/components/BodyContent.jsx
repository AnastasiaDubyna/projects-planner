import { Component } from 'react';
import ColumnBody from './ColumnBody';
import ColumnHeader from './ColumnHeader';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';
import Column from './Column';

class BodyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    titles = ["ready for dev", "in progress", "code review", "done"];
    quantity = [10, 5, 2, 6];

    render() { 
        const {readyForDevTasks} = this.props;
        return (
            <div className="body-content">
                <Grid container spacing={{xs: 5, sm: 5, md: 3}} justifyContent="space-around" justifyItems="center">
                    {this.titles.map(
                        (val, index) => 
                            <Grid item xs={12} sm={6} md={3}>
                                <Column title={val} quantity={this.quantity[index]} key={`header-${index}`} content="content" />
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        );
    }
}
 
export default BodyContent;
import { Component } from 'react';
import {Button, Popover, Typography} from '@mui/material/';
import ColumnBody from './ColumnBody';
import CreateForm from './CreateForm';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: "", anchorEl: null }
    }
    setAnchorEl = (val) => {
        this.setState({anchorEl: val});
    }

    handleClick = (e) => {
        console.log("Click");
        this.setAnchorEl(e.currentTarget);
    }

    handleChange = (e) => {
        this.setState({searchValue: e.target.value});
    }

    handleClose = () => {
        this.setAnchorEl(null);
    }

    render() { 
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;

        return ( 
            <div className="header">
                <div className="header-logo">
                    <span className="material-symbols-outlined">view_kanban</span>
                    <h1>JiraRipOff</h1>
                </div>
                <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
                    Create
                </Button>
                <Popover
                    // anchorReference={"none"}
                    id={id}
                    open={open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                >
                    <CreateForm />
                </Popover>
                <input  type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search"/>
            </div>
        );
    }
}
 
export default Header;
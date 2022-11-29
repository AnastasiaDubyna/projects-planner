import { Component } from 'react';
import {Button, Popover, Typography} from '@mui/material/';
import ColumnBody from './ColumnBody';
import CreateForm from './CreateForm';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: ""}
    }

    handleClick = () => {
        this.props.togglePopup();
    }

    handleChange = (e) => {
        this.setState({searchValue: e.target.value});
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
                <Button variant="contained" onClick={this.handleClick}>Create</Button>
                <input  type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search"/>
            </div>
        );
    }
}
 
export default Header;
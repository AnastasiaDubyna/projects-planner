import { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: "" }
    }

    handleClick = () => {
        console.log("Click");
    }

    handleChange = (e) => {
        this.setState({searchValue: e.target.value});
    }

    render() { 
        return ( 
            <div className="header">
                <div className="header-logo">
                    <span className="material-symbols-outlined">view_kanban</span>
                    <h1>JiraRipOff</h1>
                </div>
                <button className="create-button" onClick={this.handleClick}>Create</button>
                <input  type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search"/>
            </div>
        );
    }
}
 
export default Header;
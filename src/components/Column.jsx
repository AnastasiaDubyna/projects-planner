import { Component } from 'react';

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="column grey-box">
                {this.props.content}
            </div>
        );
    }
}
 
export default Column;
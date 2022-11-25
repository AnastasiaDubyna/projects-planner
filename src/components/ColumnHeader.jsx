import { Component } from 'react';

class ColumnHeader extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div className="column-header grey-box">
                <h3>{this.props.title} {this.props.quantity}</h3>
            </div>
        );
    }
}
 
export default ColumnHeader;
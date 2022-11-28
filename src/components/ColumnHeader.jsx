import { Component } from 'react';

class ColumnHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        
        const {title, quantity} = this.props;

        return ( 
            <div className="column-header grey-box">
                <h3>{title} {quantity}</h3>
            </div>
        );
    }
}
 
export default ColumnHeader;
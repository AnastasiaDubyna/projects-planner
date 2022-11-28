import { Component } from 'react';

class ColumnBody extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const {content} = this.props;
        
        return ( 
            <div className="column-body grey-box">
                {content}
            </div>
        );
    }
}
 
export default ColumnBody;
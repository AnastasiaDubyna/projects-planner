import ColumnBody from "./ColumnBody";
import ColumnHeader from "./ColumnHeader";
import { Component } from 'react';


class Column extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {title, quantity, content} = this.props;

        return (
            <div className="column">
                <ColumnHeader title={title} quantity={quantity} />
                <ColumnBody content={content} />
            </div>
        );
    }
}
 
export default Column;
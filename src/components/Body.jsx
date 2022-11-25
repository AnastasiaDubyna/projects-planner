import { Component } from 'react';
import Column from './Column';
import ColumnHeader from './ColumnHeader';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    titles = ["ready for dev", "in progress", "code review", "done"];
    quantity = [10, 5, 2, 6];
    content = ["content", "content", "content", "content"];

    render() { 
        return (
            <div className="body-content">
                <div className="headers-container">
                    {this.titles.map(
                        (val, index) => 
                            <ColumnHeader title={val} quantity={this.quantity[index]} key={`header-${index}`} />
                        )
                    }
                </div>
                <div className="columns-container">
                    {this.content.map(
                        (val, index) => 
                            <Column content={val} key={`column-${index}`} />
                        )
                    }
                </div>
            </div>
        );
    }
}
 
export default Body;
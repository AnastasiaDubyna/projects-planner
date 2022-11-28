import { Component } from 'react';
import Header from './Header.jsx';
import BodyContent from './BodyContent.jsx';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = { readyForDevTasks: [] }; 

    handleTaskAddition = (newTask) => {
        this.setState(prevState => ({
            readyForDevTasks: [...prevState.readyForDevTasks, newTask]
        }));
    }

    render() { 
        return (
            <>
                <Header />
                <BodyContent readyForDevTasks={this.state.readyForDevTasks}/>
            </>
        );
    }
}
 
export default MainPage;
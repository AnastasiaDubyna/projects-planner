import { Component } from 'react';
import Header from '../header/Header.jsx';
import BodyContent from '../bodyContent/BodyContent.jsx';
import CreateFormModal from '../modals/createForm/CreateFormModal.jsx';
import { tasksData } from './testData';

class MainPage extends Component {
    state = {
        tasks: [], 
        openPopup: false
    }; 

    componentDidMount() {
        this.setState({tasks: tasksData});
    }

    togglePopup = () => {
        this.setState(prevState => ({openPopup: !prevState.openPopup}));
    }


    handleTaskAddition = (newTask) => {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }));
    }

    render() { 
        return (
            <div className='main-page'>
                <Header togglePopup={this.togglePopup}/>
                <BodyContent tasks={this.state.tasks}/>
                <CreateFormModal 
                    openPopup={this.state.openPopup}
                    togglePopup={this.togglePopup}
                    handleTaskAddition={this.handleTaskAddition}>
                </CreateFormModal>
            </div>
        );
    }
}
 
export default MainPage;
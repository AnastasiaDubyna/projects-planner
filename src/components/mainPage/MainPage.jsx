import { Component } from 'react';
import Header from '../header/Header.jsx';
import BodyContent from '../bodyContent/BodyContent.jsx';
import CreateFormModal from '../modals/createForm/CreateFormModal.jsx';

class MainPage extends Component {
    state = {
        openPopup: false
    }; 

    togglePopup = () => {
        this.setState(prevState => ({openPopup: !prevState.openPopup}));
    }

    render() { 
        return (
            <div className='main-page'>
                <Header togglePopup={this.togglePopup}/>
                <BodyContent />
                <CreateFormModal 
                    openPopup={this.state.openPopup}
                    togglePopup={this.togglePopup}>
                </CreateFormModal>
            </div>
        );
    }
}
 
export default MainPage;
import { Component } from 'react';
import Header from './Header.jsx';
import BodyContent from './bodyContent/BodyContent.jsx';
import { Modal, Box, Typography } from '@mui/material';
import CreateForm from './CreateForm.jsx';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    state = { 
        readyForDevTasks: [
            {type: "bug", resume: "Occaecat ea do fugiat commodo laboris minim ad Lorem sit do ipsum qui.", description: "Est veniam incididunt sint adipisicing culpa deserunt mollit consectetur aliqua nulla nostrud occaecat ex minim. Consequat aute occaecat in voluptate nulla qui. Dolor eu magna et cupidatat in ad aliqua deserunt eiusmod occaecat ullamco ullamco. Commodo cupidatat sint ut duis dolor consectetur aliqua ut anim. Culpa voluptate eu dolor in magna magna aute voluptate amet ea cupidatat occaecat."},
            {type: "epic", resume: "Occaecat ea do fugiat commodo laboris minim ad Lorem sit do ipsum qui.", description: "Est veniam incididunt sint adipisicing culpa deserunt mollit consectetur aliqua nulla nostrud occaecat ex minim. Consequat aute occaecat in voluptate nulla qui. Dolor eu magna et cupidatat in ad aliqua deserunt eiusmod occaecat ullamco ullamco. Commodo cupidatat sint ut duis dolor consectetur aliqua ut anim. Culpa voluptate eu dolor in magna magna aute voluptate amet ea cupidatat occaecat."},
            {type: "epic", resume: "Occaecat ea do fugiat commodo laboris minim ad Lorem sit do ipsum qui.", description: "Est veniam incididunt sint adipisicing culpa deserunt mollit consectetur aliqua nulla nostrud occaecat ex minim. Consequat aute occaecat in voluptate nulla qui. Dolor eu magna et cupidatat in ad aliqua deserunt eiusmod occaecat ullamco ullamco. Commodo cupidatat sint ut duis dolor consectetur aliqua ut anim. Culpa voluptate eu dolor in magna magna aute voluptate amet ea cupidatat occaecat."},
            {type: "story", resume: "Occaecat ea do fugiat commodo laboris minim ad Lorem sit do ipsum qui.", description: "Est veniam incididunt sint adipisicing culpa deserunt mollit consectetur aliqua nulla nostrud occaecat ex minim. Consequat aute occaecat in voluptate nulla qui. Dolor eu magna et cupidatat in ad aliqua deserunt eiusmod occaecat ullamco ullamco. Commodo cupidatat sint ut duis dolor consectetur aliqua ut anim. Culpa voluptate eu dolor in magna magna aute voluptate amet ea cupidatat occaecat."},
            {type: "bug", resume: "Occaecat ea do fugiat commodo laboris minim ad Lorem sit do ipsum qui.", description: "Est veniam incididunt sint adipisicing culpa deserunt mollit consectetur aliqua nulla nostrud occaecat ex minim. Consequat aute occaecat in voluptate nulla qui. Dolor eu magna et cupidatat in ad aliqua deserunt eiusmod occaecat ullamco ullamco. Commodo cupidatat sint ut duis dolor consectetur aliqua ut anim. Culpa voluptate eu dolor in magna magna aute voluptate amet ea cupidatat occaecat."},
            {type: "bug", resume: "Occaecat ea do fugiat commodo laboris minim ad Lorem sit do ipsum qui.", description: "Est veniam incididunt sint adipisicing culpa deserunt mollit consectetur aliqua nulla nostrud occaecat ex minim. Consequat aute occaecat in voluptate nulla qui. Dolor eu magna et cupidatat in ad aliqua deserunt eiusmod occaecat ullamco ullamco. Commodo cupidatat sint ut duis dolor consectetur aliqua ut anim. Culpa voluptate eu dolor in magna magna aute voluptate amet ea cupidatat occaecat."},
            {type: "story", resume: "Occaecat ea do fugiat commodo laboris minim ad Lorem sit do ipsum qui.", description: "Est veniam incididunt sint adipisicing culpa deserunt mollit consectetur aliqua nulla nostrud occaecat ex minim. Consequat aute occaecat in voluptate nulla qui. Dolor eu magna et cupidatat in ad aliqua deserunt eiusmod occaecat ullamco ullamco. Commodo cupidatat sint ut duis dolor consectetur aliqua ut anim. Culpa voluptate eu dolor in magna magna aute voluptate amet ea cupidatat occaecat."},
            {type: "epic", resume: "Occaecat ea do fugiat commodo laboris minim ad Lorem sit do ipsum qui.", description: "Est veniam incididunt sint adipisicing culpa deserunt mollit consectetur aliqua nulla nostrud occaecat ex minim. Consequat aute occaecat in voluptate nulla qui. Dolor eu magna et cupidatat in ad aliqua deserunt eiusmod occaecat ullamco ullamco. Commodo cupidatat sint ut duis dolor consectetur aliqua ut anim. Culpa voluptate eu dolor in magna magna aute voluptate amet ea cupidatat occaecat."}
        ],  
        inProgressTasks: [], 
        codeReviewTasks: [], 
        doneTasks: [],
        openPopup: false
    }; 

    togglePopup = () => {
        this.setState(prevState => ({openPopup: !prevState.openPopup}));
        console.log(this.state);
    }


    handleTaskAddition = (newTask) => {
        this.setState(prevState => ({
            readyForDevTasks: [...prevState.readyForDevTasks, newTask]
        }));
    }

    render() { 

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        };

        const tasks = {
            readyForDevTasks: this.state.readyForDevTasks, 
            inProgressTasks: this.state.inProgressTasks, 
            codeReviewTasks: this.state.codeReviewTasks,
            doneTasks: this.state.doneTasks
        }

        return (
            <>
                <Header togglePopup={this.togglePopup}/>
                <BodyContent tasks={tasks}/>
                <Modal
                    open={this.state.openPopup}
                    onClose={this.togglePopup}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CreateForm handleTaskAddition={this.handleTaskAddition}/>
                    </Box>                
                </Modal>
            </>
        );
    }
}
 
export default MainPage;
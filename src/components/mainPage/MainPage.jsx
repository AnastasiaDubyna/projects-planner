import { useState } from 'react';
import Header from '../header/Header.jsx';
import BodyContent from '../bodyContent/BodyContent.jsx';
import CreateFormModal from '../modals/createForm/CreateFormModal.jsx';
import { useDispatch } from 'react-redux';
import addTaskAction from '../../redux/actions/addTaskAction';
import { nanoid } from 'nanoid';
import TaskPageModal from '../modals/taskPage/TaskPageModal.jsx';
import { stages } from '../modals/constants.js';
import moveTaskAction from '../../redux/actions/moveTaskAction.js';


const MainPage = () => {

    const [openCreatePopup, setOpenCreatePopup] = useState(false);
    const [openTaskPopup, setOpenTaskPopup] = useState(false);
    const [taskType, setTaskType] = useState("bug");
    const [taskResume, setTaskResume] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPopupContent, setTaskPopupContent] = useState("");
    const [taskStage, setTaskStage] = useState("");
    const dispatch = useDispatch();

    const handleFormChange = (e) => {
        const value = e.target.value;
        switch (e.target.name) {
            case "type":
                setTaskType(value);
                break;
            case "resume":
                setTaskResume(value);
                break;
            case "description":
                setTaskDescription(value);
                break;
            default:
                resetTaskState();
        }
    }

    const handleFormCancel = (e) => {
        toggleCreatePopup();
        resetTaskState();
    }

    const handleFormSubmit = (e) => {
        const newTask = {
            type: taskType,
            resume: taskResume, 
            description: taskDescription,
            stage: "readyForDev",
            id: nanoid()
        }; 

        dispatch(addTaskAction(newTask));
        toggleCreatePopup();
        resetTaskState();
    }

    const toggleCreatePopup = () => {
        setOpenCreatePopup(!openCreatePopup);
    }

    const resetTaskState = () => {
        setTaskType("bug");
        setTaskDescription("");
        setTaskResume("");
    }

    const handleTaskPopupOpening = (task) => {
        setTaskPopupContent(task);
        setTaskStage(task.stage);
        setOpenTaskPopup(true);
    }

    const handleTaskPopupClosing = () => {
        setOpenTaskPopup(false);
    }

    const handleTaskPopupChange = (e) => {
        const value = e.target.value;

        switch (e.target.name) {
            case "stage":
                setTaskStage(value);
                // dispatch(moveTaskAction({id: taskPopupContent.id, newStage: value}))
                break;
        }
    }

    const handleTaskPopupSubmit = () => {

    }

    return (
        <div className='main-page'>
            <Header togglePopup={toggleCreatePopup}/>
            <BodyContent openTaskPopup={handleTaskPopupOpening}/>
            <CreateFormModal 
                openPopup={openCreatePopup}
                togglePopup={toggleCreatePopup}
                handleChange={handleFormChange}
                handleCancel={handleFormCancel}
                handleSubmit={handleFormSubmit}
                type={taskType}
                resume={taskResume}
                description={taskDescription} />
            <TaskPageModal 
                openPopup={openTaskPopup}
                onClose={handleTaskPopupClosing}
                task={taskPopupContent}
                handleChange={handleTaskPopupChange}
                currentStage={taskStage}
                handleSubmit={handleTaskPopupSubmit}
            />
        </div>
    );

}
 
export default MainPage;
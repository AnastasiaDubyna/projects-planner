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
import editTaskAction from '../../redux/actions/editTaskAction.js';


const MainPage = () => {

    const [openCreatePopup, setOpenCreatePopup] = useState(false);
    const [openTaskPopup, setOpenTaskPopup] = useState(false);
    const [taskType, setTaskType] = useState("bug");
    const [taskResume, setTaskResume] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskStage, setTaskStage] = useState("");
    const [taskId, setTaskId] = useState("")
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

    const handleTaskPopupOpening = ({resume, description, stage, id, type}) => {
        setTaskStage(stage);
        setTaskResume(resume);
        setTaskDescription(description);
        setOpenTaskPopup(true);
        setTaskId(id);
        setTaskType(type);
    }

    const handleTaskPopupClosing = () => {
        setOpenTaskPopup(false);
    }

    const handleTaskPopupChange = ({target: {value, name}}) => {
        switch (name) {
            case "stage":
                setTaskStage(value);
                break;
            case "resume":
                setTaskResume(value);
                break;
            case "description":
                setTaskDescription(value);
            case "type":
                setTaskType(value);
                break;
        }
    }

    const handleTaskPopupSubmit = () => {
        dispatch(editTaskAction({
            id: taskId, 
            editedTask: {
                id: taskId, 
                stage: taskStage, 
                resume: taskResume, 
                description: taskDescription, 
                type: taskType
            }
        }))
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
                handleChange={handleTaskPopupChange}
                currentStage={taskStage}
                handleSubmit={handleTaskPopupSubmit}
                resume={taskResume}
                description={taskDescription}
                id={taskId}
                type={taskType}
            />
        </div>
    );

}
 
export default MainPage;
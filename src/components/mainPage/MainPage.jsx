import { useState } from 'react';
import Header from '../header/Header.jsx';
import BodyContent from '../bodyContent/BodyContent.jsx';
import CreateFormModal from '../modals/createForm/CreateFormModal.jsx';
import { useDispatch } from 'react-redux';
import addTaskAction from '../../redux/actions/addTaskAction';
import { nanoid } from 'nanoid';
import TaskPageModal from '../modals/taskPage/TaskPageModal.jsx';
import editTaskAction from '../../redux/actions/editTaskAction.js';
import postTaskAction from '../../redux/actions/postTaskAction.js';
import putTaskAction from '../../redux/actions/putTaskAction.js';
import { useEffect } from 'react';


const MainPage = () => {
    const [openCreatePopup, setOpenCreatePopup] = useState(false);
    const [openTaskPopup, setOpenTaskPopup] = useState(false);
    const [taskType, setTaskType] = useState("bug");
    const [taskResume, setTaskResume] = useState("");
    const [taskResumeInputValue, setTaskResumeInputValue] = useState("");
    const [taskDescriptionInputValue, setTaskDescriptionInputValue] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskStage, setTaskStage] = useState("");
    const [taskId, setTaskId] = useState("")
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const newTask = {
            type: "bug",
            resume: "resume", 
            description: "description",
            stage: "readyForDev"
        };
        dispatch(postTaskAction({newTask: {...newTask, id: nanoid(5)}}));
    }, []);

    const handleSearchInputChange = ({target: {value}}) => {
        setSearchValue(value);
    };

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
    };

    const handleFormCancel = () => {
        toggleCreatePopup();
        resetTaskState();
    };

    const handleFormSubmit = () => {
        const newTask = {
            type: taskType,
            resume: taskResume, 
            description: taskDescription,
            stage: "readyForDev",
            id: nanoid()
        }; 

        dispatch(postTaskAction({newTask}));
        toggleCreatePopup();
        resetTaskState();
    };

    const toggleCreatePopup = () => {
        setOpenCreatePopup(!openCreatePopup);
    };

    const resetTaskState = () => {
        setTaskType("bug");
        setTaskDescription("");
        setTaskResume("");
    };

    const handleTaskPopupOpening = ({resume, description, stage, id, type}) => {
        setTaskStage(stage);
        setTaskResume(resume);
        setTaskResumeInputValue(resume);
        setTaskDescription(description);
        setTaskDescriptionInputValue(description);
        setOpenTaskPopup(true);
        setTaskId(id);
        setTaskType(type);
    };

    const handleTaskPopupClosing = () => {
        resetTaskState();
        setOpenTaskPopup(false);
    };

    const handleTaskPopupChange = ({target: {value, name}}) => {
        switch (name) {
            case "stage":
                setTaskStage(value);
                break;
            case "resume":
                setTaskResumeInputValue(value);
                break;
            case "description":
                setTaskDescriptionInputValue(value);
                break;
            default:
                resetTaskState();
        }
    };

    const handleTaskPopupSubmit = () => {
        const editedTask = {
            id: taskId, 
            stage: taskStage, 
            resume: taskResume, 
            description: taskDescription, 
            type: taskType
        };
        dispatch(putTaskAction({
            id: taskId, 
            editedTask
        }));
        handleTaskPopupClosing();
    };

    const handleTaskPopupInputSave = (id) => {
        switch (id) {
            case "resume-save":
                setTaskResume(taskResumeInputValue);
                break;
            case "description-save":
                setTaskDescription(taskDescriptionInputValue);
                break;
            default:
                resetTaskState();
        }
    };

    const handleTaskPopupInputCancel = (id) => {
        switch (id) {
            case "resume-cancel":
                setTaskResumeInputValue(taskResume);
                break;
            case "description-cancel":
                setTaskDescriptionInputValue(taskDescription);
                break;
            default:
                resetTaskState();
        }
    };

    return (
        <div className='main-page'>
            <Header 
                togglePopup={toggleCreatePopup} 
                onChange={handleSearchInputChange}
                searchValue={searchValue}/>
            <BodyContent 
                openTaskPopup={handleTaskPopupOpening}
                searchValue={searchValue}/>
            <CreateFormModal 
                openPopup={openCreatePopup}
                type={taskType}
                resume={taskResume}
                description={taskDescription} 
                togglePopup={toggleCreatePopup}
                onChange={handleFormChange}
                onCancel={handleFormCancel}
                onSubmit={handleFormSubmit} 
            />
            <TaskPageModal 
                openPopup={openTaskPopup}
                currentStage={taskStage}
                resume={taskResume}
                resumeInputValue={taskResumeInputValue}
                id={taskId}
                type={taskType}
                description={taskDescription}
                descriptionInputValue={taskDescriptionInputValue}
                onClose={handleTaskPopupClosing}
                onChange={handleTaskPopupChange}
                onSubmit={handleTaskPopupSubmit}
                onSave={handleTaskPopupInputSave}
                onCancel={handleTaskPopupInputCancel}
            />
        </div>
    );

}
 
export default MainPage;
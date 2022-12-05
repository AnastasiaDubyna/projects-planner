import { useState } from 'react';
import Header from '../header/Header.jsx';
import BodyContent from '../bodyContent/BodyContent.jsx';
import CreateFormModal from '../modals/createForm/CreateFormModal.jsx';
import { useDispatch } from 'react-redux';
import addTaskAction from '../../redux/actions/addTaskAction';
import { nanoid } from 'nanoid';


const MainPage = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const [taskType, setTaskType] = useState("bug");
    const [taskResume, setTaskResume] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
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
                throw "unknown input";
        }
    }

    const handleCancel = (e) => {
        togglePopup();
        resetTaskState();
    }

    const handleSubmit = (e) => {
        const newTask = {
            type: taskType,
            resume: taskResume, 
            description: taskDescription,
            stage: "readyForDev",
            id: nanoid()
        }; 

        dispatch(addTaskAction(newTask));
        togglePopup();
        resetTaskState();
    }

    const togglePopup = () => {
        setOpenPopup(!openPopup);
    }

    const resetTaskState = () => {
        setTaskType("bug");
        setTaskDescription("");
        setTaskResume("");
    }

    return (
        <div className='main-page'>
            <Header togglePopup={togglePopup}/>
            <BodyContent />
            <CreateFormModal 
                openPopup={openPopup}
                togglePopup={togglePopup}
                handleChange={handleChange}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                type={taskType}
                resume={taskResume}
                description={taskDescription}>
            </CreateFormModal>
        </div>
    );

}
 
export default MainPage;
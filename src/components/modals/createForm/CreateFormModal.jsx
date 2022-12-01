import { useState } from 'react';
import { Box, TextField, Button, Modal, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { defaultModalStyle, taskTypes } from '../constants';
import { nanoid } from 'nanoid';
import './createFormModal.css'
import { useDispatch } from 'react-redux';


const CreateFormModal = ({togglePopup, openPopup}) => {
    const initialState = {
        type: "bug",
        resume: "",
        description: ""
    };
    const dispatch = useDispatch();
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const handleCancel = (e) => {
        setState(initialState);
        togglePopup();
    }

    const handleSubmit = (e) => {
        const newTask = {
            ...state,
            stage: "readyForDev",
            id: nanoid()
        }; 

        dispatch({type: "ADD_TASK", payload: newTask});
        setState(initialState);
        togglePopup();
    }

    return (
        <Modal
            open={openPopup}
            onClose={togglePopup}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={defaultModalStyle} className="create-form">
                <FormControl>
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                        labelId="type-label"
                        id="type-select"
                        value={state.type}
                        label="Type"
                        name="type"
                        onChange={handleChange}
                    >
                        {taskTypes.map(
                            type => <MenuItem className="select-item" value={type} key={nanoid()}>{type}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <TextField id="resume-input" label="Resume" variant="outlined" name="resume" value={state.resume} onChange={handleChange}/>
                <TextField multiline minRows={5} id="description-input" label="Description" variant="outlined" name="description" value={state.description} onChange={handleChange}/>
                <div className="buttons-container">
                    <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>Save</Button>
                </div>
            </Box>                
        </Modal>
    );
    
}
 
export default CreateFormModal;
import { Modal, Box, Select, FormControl, InputLabel, MenuItem, Typography, Button, TextField } from "@mui/material";
import { defaultModalStyle } from "../constants";
import { stages, icons } from "../constants";
import { nanoid } from "nanoid";
import './taskPageModal.css'
import { useState } from "react";

const TaskPageModal = ({openPopup, onClose, onChange, onCancel, onSave, currentStage, onSubmit, resume, description, id, type, resumeInputValue, descriptionInputValue}) => {
    const [isResumeEditable, setResumeEditable] = useState(false);
    const [isDescriptionEditable, setDescriptionEditable] = useState(false);

    const handleClick = ({target: {id}}) => {
        switch (id) {
            case "resume":
                setResumeEditable(true);
                break;
            case "description":
                setDescriptionEditable(true);
                break;
            case "resume-cancel":
                setResumeEditable(false);
                onCancel(id);
                break;
            case "description-cancel":
                setDescriptionEditable(false);
                onCancel(id);
                break;
            case "resume-save":
                setResumeEditable(false);
                onSave(id);
                break;
            case "description-save":
                setDescriptionEditable(false);
                onSave(id);
                break;
            default:
                break;
        }
    };

    const resetState = () => {
        setResumeEditable(false);
        setDescriptionEditable(false);
    };

    const handleClose = () => {
        resetState();
        onClose();
    };

    const handleSubmit = () => {
        resetState();
        onSubmit();
    }

    return (
        <Modal
            open={openPopup}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={defaultModalStyle} className="task-popup">
                <div>
                    <Typography className="task-id"><span>Task ID: </span>{id}</Typography>
                    {icons[type]}
                </div>
                <FormControl>
                    <InputLabel id="stage-label">Stage</InputLabel>
                    <Select
                        labelId="stage-label"
                        id="stage-select"
                        value={currentStage}
                        label="Stage"
                        name="stage"
                        onChange={onChange}
                        >
                        {stages.map(
                            stage => <MenuItem className="select-item" value={stage.keyName} key={nanoid()}>{stage.titleName}</MenuItem>
                            )}
                    </Select>
                </FormControl>
                <div onClick={handleClick}>
                    {
                        isResumeEditable
                            ? <div className="input-container">
                                <TextField 
                                    fullWidth
                                    multiline
                                    id="resume-input" 
                                    label="Resume" 
                                    variant="outlined" 
                                    name="resume" 
                                    value={resumeInputValue} 
                                    onChange={onChange}/> 
                                <div className="buttons-container">
                                    <Button variant="outlined" id="resume-cancel" onClick={handleClick}>Cancel</Button>
                                    <Button variant="contained" id="resume-save" onClick={handleClick}>Save</Button>
                                </div>
                            </div>
                            : <>
                                <Typography>Resume</Typography>
                                <Typography id="resume">{resume}</Typography>
                            </>
                        
                    }
                </div>
                <div onClick={handleClick}>
                    {
                        isDescriptionEditable
                            ? <div className="input-container">
                                <TextField 
                                    fullWidth
                                    multiline
                                    id="description-input" 
                                    label="Description" 
                                    variant="outlined" 
                                    name="description" 
                                    value={descriptionInputValue} 
                                    onChange={onChange}/> 
                                <div className="buttons-container">
                                    <Button variant="outlined" id="description-cancel" onClick={handleClick}>Cancel</Button>
                                    <Button variant="contained" id="description-save" onClick={handleClick}>Save</Button>
                                </div>
                            </div>
                            : <>
                                <Typography>Description</Typography>
                                <Typography id="description">{description}</Typography>
                            </>
                    }
                </div>
                <div className="buttons-container">
                    <Button variant="outlined" onClick={handleClose}>Close</Button>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </div>
            </Box>                
        </Modal>
    );
}

export default TaskPageModal;
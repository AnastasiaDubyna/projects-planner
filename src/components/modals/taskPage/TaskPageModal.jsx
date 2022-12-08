import { Modal, Box, Select, FormControl, InputLabel, MenuItem, Typography, Button, TextField } from "@mui/material";
import { defaultModalStyle } from "../constants";
import { stages, taskTypes, icons } from "../constants";
import { nanoid } from "nanoid";
import './taskPageModal.css'
import { useState } from "react";

const TaskPageModal = ({openPopup, onClose, handleChange, currentStage, handleSubmit, resume, description, id, type}) => {
    const [isResumeEditable, setResumeEditable] = useState(false);
    const [isDescriptionEditable, setDescriptionEditable] = useState(false);
    const [isTypeEditable, setTypeEditable] = useState(false);

    const handleClick = ({target: {id}}) => {
        switch (id) {
            case "resume":
                setResumeEditable(true);
                console.log("click");
                break;
            case "description":
                setDescriptionEditable(true);
                break;
            case "resume-input":
                setResumeEditable(false);
                break;
            case "description-input":
                setDescriptionEditable(false);
                break;
            case "type":
                setTypeEditable(true);
                break;
            case "type-select":
                setTypeEditable(false);
                break;
        }
    }
    console.log(type);
    return (
        <Modal
            open={openPopup}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={defaultModalStyle} className="task-popup">
                <Typography className="task-id">Task ID: {id}</Typography>
                <div onClick={handleClick}>
                    {
                        isTypeEditable
                        ? <FormControl>
                            <InputLabel id="type-label">Type</InputLabel>
                            <Select
                                labelId="type-label"
                                id="type-select"
                                value={type}
                                label="Type"
                                name="type"
                                onChange={handleChange}
                            >
                                {taskTypes.map(
                                    type => <MenuItem className="select-item" value={type} key={nanoid()}>{type}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        : <div id="type">{icons[type]}</div>
                    }
                </div>
                
                <FormControl>
                    <InputLabel id="stage-label">Stage</InputLabel>
                    <Select
                        labelId="stage-label"
                        id="stage-select"
                        value={currentStage}
                        label="Stage"
                        name="stage"
                        onChange={handleChange}
                        >
                        {stages.map(
                            stage => <MenuItem className="select-item" value={stage.keyName} key={nanoid()}>{stage.titleName}</MenuItem>
                            )}
                    </Select>
                </FormControl>
                <div onClick={handleClick}>
                    {
                        isResumeEditable
                            ? <TextField 
                                fullWidth
                                multiline
                                id="resume-input" 
                                label="Resume" 
                                variant="outlined" 
                                name="resume" 
                                value={resume} 
                                onChange={handleChange}/> 
                            : <>
                                <Typography>Resume</Typography>
                                <Typography id="resume">{resume}</Typography>
                            </>
                        
                    }
                </div>
                <div onClick={handleClick}>
                    {
                        isDescriptionEditable
                            ? <TextField 
                                fullWidth
                                multiline
                                id="description-input" 
                                label="Description" 
                                variant="outlined" 
                                name="description" 
                                value={description} 
                                onChange={handleChange}/> 
                            : <>
                                <Typography>Description</Typography>
                                <Typography id="description">{description}</Typography>
                            </>
                    }
                </div>
                <div className="buttons-container">
                    <Button variant="outlined" onClick={onClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>Save</Button>
                </div>
            </Box>                
        </Modal>
    );
}

export default TaskPageModal;
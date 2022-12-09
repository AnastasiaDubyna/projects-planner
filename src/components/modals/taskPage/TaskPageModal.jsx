import { Modal, Box, Select, FormControl, InputLabel, MenuItem, Typography, Button } from "@mui/material";
import { defaultModalStyle } from "../constants";
import { stages } from "../constants";
import { nanoid } from "nanoid";
import './taskPageModal.css'

const TaskPageModal = ({openPopup, onClose, task, handleChange, currentStage, handleSubmit}) => {
    return (
        <Modal
            open={openPopup}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={defaultModalStyle} className="task-popup">
                <Typography className="task-id">{task.id}</Typography>
                <FormControl>
                    <InputLabel id="stage-label">Type</InputLabel>
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
                <Typography>Resume</Typography>
                <Typography>{task.resume}</Typography>
                <Typography>Description</Typography>
                <Typography>{task.description}</Typography>
                <Button variant="outlined" onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={handleSubmit}>Save</Button>
            </Box>                
        </Modal>
    );
}

export default TaskPageModal;
import { Box, TextField, Button, Modal, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { defaultModalStyle, taskTypes } from '../constants';
import { nanoid } from 'nanoid';
import './createFormModal.css'


const CreateFormModal = ({togglePopup, openPopup, handleChange, handleCancel, handleSubmit, type, resume, description}) => {

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
                <TextField id="resume-input" label="Resume" variant="outlined" name="resume" value={resume} onChange={handleChange}/>
                <TextField multiline minRows={5} id="description-input" label="Description" variant="outlined" name="description" value={description} onChange={handleChange}/>
                <div className="buttons-container">
                    <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>Save</Button>
                </div>
            </Box>                
        </Modal>
    );
    
}
 
export default CreateFormModal;
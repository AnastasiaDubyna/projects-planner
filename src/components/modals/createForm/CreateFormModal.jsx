import { Box, TextField, Button, Modal, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { defaultModalStyle, taskTypes } from '../constants';
import { nanoid } from 'nanoid';
import './createFormModal.css'


const CreateFormModal = ({togglePopup, openPopup, onChange, onCancel, onSubmit, type, resume, description}) => {

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
                        onChange={onChange}
                    >
                        {taskTypes.map(
                            type => <MenuItem className="select-item" value={type} key={nanoid()}>{type}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <TextField 
                    id="resume-input" 
                    label="Resume" 
                    variant="outlined" 
                    name="resume" 
                    value={resume} 
                    onChange={onChange}/>
                <TextField 
                    multiline 
                    minRows={5} 
                    id="description-input" 
                    label="Description" 
                    variant="outlined" 
                    name="description" 
                    value={description} 
                    onChange={onChange}/>
                <div className="buttons-container">
                    <Button variant="outlined" onClick={onCancel}>Cancel</Button>
                    <Button variant="contained" onClick={onSubmit}>Save</Button>
                </div>
            </Box>                
        </Modal>
    );
    
}
 
export default CreateFormModal;
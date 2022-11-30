import { Component } from 'react';
import { Box, TextField, Button, Modal, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { defaultModalStyle, taskTypes } from '../constants';
import { nanoid } from 'nanoid';
import './createFormModal.css'

class CreateFormModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "bug", 
            resume: "", 
            description: ""
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleCancel = (e) => {
        this.setState({
            type: "bug", 
            resume: "", 
            description: ""
        });
        this.props.togglePopup();
    }

    handleSubmit = (e) => {
        const newTask = {
            ...this.state,
            stage: "readyForDev",
            id: nanoid()
        }
        this.props.handleTaskAddition(newTask);
        this.props.togglePopup();
    }

    render() { 
        const {openPopup, togglePopup} = this.props;
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
                            value={this.state.type}
                            label="Type"
                            name="type"
                            onChange={this.handleChange}
                        >
                            {taskTypes.map(
                                type => <MenuItem className="select-item" value={type} key={nanoid()}>{type}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField id="resume-input" label="Resume" variant="outlined" name="resume" value={this.state.resume} onChange={this.handleChange}/>
                    <TextField multiline id="description-input" label="Description" variant="outlined" name="description" value={this.state.description} onChange={this.handleChange}/>
                    <div className="buttons-container">
                        <Button variant="outlined" onClick={this.handleCancel}>Cancel</Button>
                        <Button variant="contained" onClick={this.handleSubmit}>Save</Button>
                    </div>
                </Box>                
            </Modal>
        );
    }
}
 
export default CreateFormModal;
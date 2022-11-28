import { Component } from 'react';
import {Box, TextField, Button} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

class CreateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {type: "bug", resume: "", description: ""};
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleCancel = (e) => {

    }

    handleSubmit = (e) => {
        this.props.handleTaskAddition(this.state);
    }

    render() { 
        console.log(this.state);
        return (
            <Box sx={{ minWidth: 1120, minHeight: 600 }}>
                <FormControl>
                    <InputLabel id="type-label">Age</InputLabel>
                    <Select
                        labelId="type-label"
                        id="type-select"
                        value={this.state.type}
                        label="Type"
                        name="type"
                        onChange={this.handleChange}
                    >
                        <MenuItem value="epic">Epic</MenuItem>
                        <MenuItem value="bug"> Bug</MenuItem>
                        <MenuItem value="story">Story</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="resume-input" label="Resume" variant="outlined" name="resume" value={this.state.resume} onChange={this.handleChange}/>
                <TextField multiline id="description-input" label="Description" variant="outlined" name="description" value={this.state.description} onChange={this.handleChange}/>
                <Button variant="outlined" onClick={this.handleCancel}>Cancel</Button>
                <Button variant="contained" onClick={this.handleSubmit}>Save</Button>
            </Box>
        );
    }
}
 
export default CreateForm;
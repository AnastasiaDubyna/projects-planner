import { Button, Grid } from '@mui/material/';
import { DebounceInput } from 'react-debounce-input';
import './header.css';

const Header = ({togglePopup, onChange, searchValue}) => {  
    return ( 
        <Grid container className="header" >
            <Grid item xs={12} sm={6} md={9} lg={9}>
                <div className="header-logo">
                    <span className="material-symbols-outlined">view_kanban</span>
                    <h1>JiraRipOff</h1>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={1}>
                <Button variant="contained" onClick={togglePopup}>Create</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
                <DebounceInput
                    debounceTimeout={300}
                    onChange={onChange}
                    value={searchValue}
                    placeholder="Search"
                    />
            </Grid>
        </Grid>
    );
    
}
 
export default Header;
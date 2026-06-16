import React, {Component} from 'react';
import './NavBar.css';
import logoinsta from "../../Images/logoinsta.png";
import home from "../../Images/home.svg";
import message from "../../Images/message.svg";
import find from "../../Images/find.svg";
import react from "../../Images/love.svg";
import Avatar from "@mui/material/Avatar";
import { Grid } from '@mui/material';
import dp from "../../Images/profilepic.jpeg";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render () {
        return (
            <div className="navbar_barContent">
                <div className="navbar_left"></div>
                <div className="navbar_center">
                    <img className="navbar_logo" src={logoinsta} width="105px" alt="Instagram Logo"/>
                </div>
                <div className="navbar_right">
                    <input type="text" placeholder="Search" className="navbar_search"/>
                </div>
                <div>
                    <Grid item xs={3} style={{ display: 'flex' }}>
                    <img className="NavBar_img" src={home} width="40px" alt="Home icon" />
                    <img className="NavBar_img" src={message} width="40px" alt="Messages icon" />
                    <img className="NavBar_img" src={find} width="40px" alt="Explore icon" />
                    <img className="NavBar_img" src={react} width="40px" alt="Activity icon" />
                    <Avatar src={dp} className="NavBar_img" style={{maxHeight: '40px', maxWidth: '40px'}}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </div>
            </div>
        );
    }
}

export default NavBar;
import React, {Component} from 'react';
import "./StatusBar.css";
import Avatar from "@mui/material/Avatar";
import levistatus from "../../Images/levistatus.png";
import snap from "../../Images/statuspicthree.jpeg";
import statuspicone from "../../Images/statuspicone.png";
import bettystatus from "../../Images/bettystatus.jpeg";
import instastatus from "../../Images/instastatus.png";
import firstpost from "../../Images/firstpost.jpeg";
import thirdpost from "../../Images/thirdpost.jpeg";

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render () {
        return (
            <div>
                <div className="statusbar_container">
                    <div className="status">
                        <Avatar className="statusbar_status" src={levistatus} />
                        <div className="statusbar_text">Mmathapelo</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={snap} />
                        <div className="statusbar_text">Nicholas</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={statuspicone} />
                        <div className="statusbar_text">Spaceinvader</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={bettystatus} />
                        <div className="statusbar_text">Betty</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={instastatus} />
                        <div className="statusbar_text">Lerato</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={firstpost} />
                        <div className="statusbar_text">Vicky</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={thirdpost} />
                        <div className="statusbar_text">Keletso</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default StatusBar;
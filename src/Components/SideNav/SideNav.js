import React, { Component } from 'react';
import './SideNav.css';
import logoinsta from "../../Images/logoinsta.png";
import Avatar from '@mui/material/Avatar';
import dp from "../../Images/levistatus.png";
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false }
    }

    render () {
        const { expanded } = this.state;
        return (
            <div
                className={`sidenav_container ${expanded ? 'sidenav_expanded' : ''}`}
                onMouseEnter={() => this.setState({ expanded: true })}
                onMouseLeave={() => this.setState({ expanded: false })}
            >
                {/* Logo */}
                <div className="sidenav_logo">
                    {expanded
                        ? <img src={logoinsta} width="103px" alt="Instagram" />
                        : <div className="sidenav_logo_icon">📷</div>
                    }
                </div>

                {/* Nav Items */}
                <div className="sidenav_items">
                    <div className="sidenav_item" onClick={() => this.props.onNavigate('home')}>
                        <HomeIcon className="sidenav_icon" />
                        {expanded && <span>Home</span>}
                    </div>
                    <div className="sidenav_item">
                        <SearchIcon className="sidenav_icon" />
                        {expanded && <span>Search</span>}
                    </div>
                    <div className="sidenav_item">
                        <MovieIcon className="sidenav_icon" />
                        {expanded && <span>Reels</span>}
                    </div>
                    <div className="sidenav_item">
                        <SendIcon className="sidenav_icon" />
                        {expanded && <span>Messages</span>}
                    </div>
                    <div className="sidenav_item">
                        <FavoriteBorderIcon className="sidenav_icon" />
                        {expanded && <span>Notifications</span>}
                    </div>
                    <div className="sidenav_item">
                        <AddBoxOutlinedIcon className="sidenav_icon" />
                        {expanded && <span>Create</span>}
                    </div>
                    <div className="sidenav_item" onClick={() => this.props.onNavigate('profile')}>
                        <Avatar src={dp} style={{ width: 28, height: 28 }} />
                        {expanded && <span>Profile</span>}
                    </div>
                </div>
            </div>
        );
    }
}

export default SideNav;
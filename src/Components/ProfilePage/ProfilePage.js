import React, { Component } from 'react';
import './ProfilePage.css';
import Avatar from '@mui/material/Avatar';
import dp from "../../Images/levistatus.png";


import post2 from "../../Images/profilepost1.jpg";
import post3 from "../../Images/profilepost2.jpg";
import post4 from "../../Images/profilepost3.jfif";
import postfirst from "../../Images/profilepost4.jfif";
import instapost from "../../Images/profilepost5.jfif";
import instapost1 from "../../Images/profilepost6.jfif";

import GridOnIcon from '@mui/icons-material/GridOn';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';


const profilePosts = [
    post2, post3, post4, postfirst, instapost, instapost1
];

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'posts'
        }
    }

    render() {
        return (
            <div className="profile_container">

                {/* Profile Header */}
                <div className="profile_header">
                    <Avatar src={dp} className="profile_avatar" style={{ width: 100, height: 100 }} />
                    <div className="profile_info">
                        <div className="profile_top">
                            <div className="profile_username">Mmathapelo</div>
                            <button className="profile_edit_btn">Edit profile</button>
                            <button className="profile_archive_btn">View archive</button>
                        </div>
                        <div className="profile_stats">
                            <div className="profile_stat">
                                <span className="profile_stat_number">6</span> posts
                            </div>
                            <div className="profile_stat">
                                <span className="profile_stat_number">721</span> followers
                            </div>
                            <div className="profile_stat">
                                <span className="profile_stat_number">524</span> following
                            </div>
                        </div>
                        <div className="profile_name">Mmathapelo Nare</div>
                        <div className="profile_bio">she/her</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="profile_tabs">
                    <div
                        className={`profile_tab ${this.state.activeTab === 'posts' ? 'profile_tab_active' : ''}`}
                        onClick={() => this.setState({ activeTab: 'posts' })}
                    >
                        <GridOnIcon style={{ fontSize: 16 }} /> POSTS
                    </div>
                    <div
                        className={`profile_tab ${this.state.activeTab === 'saved' ? 'profile_tab_active' : ''}`}
                        onClick={() => this.setState({ activeTab: 'saved' })}
                    >
                        <BookmarkBorderIcon style={{ fontSize: 16 }} /> SAVED
                    </div>
                    <div
                        className={`profile_tab ${this.state.activeTab === 'tagged' ? 'profile_tab_active' : ''}`}
                        onClick={() => this.setState({ activeTab: 'tagged' })}
                    >
                        <PermContactCalendarOutlinedIcon style={{ fontSize: 16 }} /> TAGGED
                    </div>
                </div>

                {/* Posts Grid */}
                {this.state.activeTab === 'posts' && (
                    <div className="profile_grid">
                        {profilePosts.map((img, i) => (
                            <div className="profile_grid_item" key={i}>
                                <img src={img} alt="post" />
                            </div>
                        ))}
                    </div>
                )}

                {this.state.activeTab === 'saved' && (
                    <div className="profile_empty">
                        <BookmarkBorderIcon style={{ fontSize: 40 }} />
                        <h3>Save</h3>
                        <p>Save photos and videos that you want to see again.</p>
                    </div>
                )}

                {this.state.activeTab === 'tagged' && (
                    <div className="profile_empty">
                        <PermContactCalendarOutlinedIcon style={{ fontSize: 40 }} />
                        <h3>Photos of you</h3>
                        <p>When people tag you in photos, they'll appear here.</p>
                    </div>
                )}
            </div>
        );
    }
}

export default ProfilePage;
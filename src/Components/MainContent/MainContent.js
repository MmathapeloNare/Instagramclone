import React, { Component } from "react";
import "./MainContent.css";
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";
import Avatar from "@mui/material/Avatar";

import postimage from "../../Images/profilepic.jpeg";
import levistatus from "../../Images/levistatus.png";
import bbprincess from "../../Images/bbprincess.jfif";
import Ryan from "../../Images/Ryan.jfif";
import Bianca from "../../Images/Bianca.jfif";
import Leo from "../../Images/Leo.jfif";
import Brandon from "../../Images/Brandon.jfif";

const suggestions = [
    { id: 1, name: "Bianca", sub: "Suggested for you", image: Bianca },
    { id: 2, name: "Bubblegumprincess", sub: "Followed by Lerato", image: bbprincess },
    { id: 3, name: "Leo", sub: "Suggested for you", image: Leo },
    { id: 4, name: "Brandon", sub: "Followed by Betty", image: Brandon },
    { id: 5, name: "Ryan", sub: "Suggested for you", image: Ryan },
];

class MainContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            followed: {},
        };
    }

    handleFollow = (id) => {
        this.setState((prevState) => ({
            followed: {
                ...prevState.followed,
                [id]: !prevState.followed[id],
            },
        }));
    };

    render() {
        return (
            <div className="maincontent_wrapper">
                <div className="maincontent_feed">
                    <StatusBar />
                    <MainPage />
                </div>

                <div className="maincontent_sidebar">
                    {/* Your Profile */}
                    <div className="sidebar_profile">
                        <Avatar src={levistatus} />
                        <div>
                            <div className="sidebar_username">
                                Mmathapelo
                            </div>
                            <div className="sidebar_subtext">
                                Mmathapelo Nare
                            </div>
                        </div>
                    </div>

                    {/* Suggestions Header */}
                    <div className="sidebar_suggestions_header">
                        <div className="sidebar_suggestions_title">
                            Suggested for you
                        </div>
                        <div className="sidebar_see_all">
                            See all
                        </div>
                    </div>

                    {/* Suggestions List */}
                    {suggestions.map((s) => (
                        <div
                            className="sidebar_suggestion"
                            key={s.id}
                        >
                            <div className="sidebar_suggestion_info">
                                <Avatar
                                    src={s.image}
                                    sx={{ width: 32, height: 32 }}
                                />

                                <div>
                                    <div className="sidebar_suggestion_name">
                                        {s.name}
                                    </div>

                                    <div className="sidebar_suggestion_sub">
                                        {s.sub}
                                    </div>
                                </div>
                            </div>

                            <button
                                className="sidebar_follow_btn"
                                onClick={() =>
                                    this.handleFollow(s.id)
                                }
                            >
                                {this.state.followed[s.id]
                                    ? "Following"
                                    : "Follow"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MainContent;

import React, { Component } from 'react';
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import fifthpost from "../../Images/fifthpost.jpeg";
import instapost1 from "../../Images/Jake.jpeg";
import firstpost from "../../Images/firstpost.jpeg";
import post3 from "../../Images/kaizer+ivan.jpeg";
import post4 from "../../Images/postimg.jpeg";
import fourthpost from "../../Images/fourthpost.jpeg";
import levistatus from "../../Images/levistatus.png";
import flowers from "../../Images/flowers.jpeg";
import secondpost from "../../Images/secondpost.jpeg";
import betty from "../../Images/bettystatus.jpeg";
import jeager from "../../Images/jeager.jpeg";
import thirdpost from "../../Images/thirdpost.jpeg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const posts = [
    { id: 1, avatar: firstpost, username: "Vicky", image: fifthpost },
    { id: 2, avatar: levistatus, username: "Mmathapelo Nare", image: post3 },
    { id: 3, avatar: instapost1, username: "Nicholas", image: post4 },
    { id: 4, avatar: flowers, username: "Spaceinvader", image: secondpost },
    { id: 5, avatar: betty, username: "Betty", image: jeager },
    { id: 6, avatar: thirdpost, username: "Lerato", image: fourthpost },
];

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: {},
            comments: {},
            commentInput: {}
        };
    }

    handleLike = (id) => {
        this.setState(prev => ({
            likes: { ...prev.likes, [id]: !prev.likes[id] }
        }));
    }

    handleCommentChange = (id, value) => {
        this.setState(prev => ({
            commentInput: { ...prev.commentInput, [id]: value }
        }));
    }

    handleCommentSubmit = (id) => {
        const comment = this.state.commentInput[id];
        if (!comment) return;
        this.setState(prev => ({
            comments: {
                ...prev.comments,
                [id]: [...(prev.comments[id] || []), comment]
            },
            commentInput: { ...prev.commentInput, [id]: "" }
        }));
    }

    handleShare = (username) => {
        alert(`Post by ${username} shared!`);
    }

    render() {
        return (
            <div>
                {posts.map(post => (
                    <div className="post_container" key={post.id}>

                        {/* Header */}
                        <div className="post_header">
                            <div className="post_header_left">
                                <Avatar src={post.avatar} />
                                <div>
                                    <div className="post_username">{post.username}</div>
                                    <div className="post_time">1w</div>
                                </div>
                            </div>
                            <div style={{ cursor: 'pointer', fontSize: '20px', color: '#262626' }}>•••</div>
                        </div>

                        {/* Image */}
                        <img src={post.image} className="post_img" alt="post" />

                        {/* Action buttons */}
                        <div className="post_actions">
                            <div className="post_actions_left">
                                <div onClick={() => this.handleLike(post.id)} className="post_icon">
                                    {this.state.likes[post.id]
                                        ? <FavoriteIcon style={{ color: 'red', fontSize: 28 }} />
                                        : <FavoriteBorderIcon style={{ fontSize: 28 }} />}
                                </div>
                                <div className="post_icon">
                                    <ChatBubbleOutlineIcon style={{ fontSize: 28 }} />
                                </div>
                                <div className="post_icon" onClick={() => this.handleShare(post.username)}>
                                    <SendIcon style={{ fontSize: 28 }} />
                                </div>
                            </div>
                            <div className="post_icon">
                                <BookmarkBorderIcon style={{ fontSize: 28 }} />
                            </div>
                        </div>

                        {/* Likes count */}
                        <div className="post_likes">
                            {this.state.likes[post.id] ? "1 like" : "0 likes"}
                        </div>

                        {/* Comments */}
                        <div className="post_comments">
                            {(this.state.comments[post.id] || []).map((c, i) => (
                                <div key={i} className="post_comment">
                                    <strong>You:</strong> {c}
                                </div>
                            ))}
                        </div>

                        {/* Comment input */}
                        <div className="post_commentinput">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={this.state.commentInput[post.id] || ""}
                                onChange={(e) => this.handleCommentChange(post.id, e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && this.handleCommentSubmit(post.id)}
                            />
                            <button onClick={() => this.handleCommentSubmit(post.id)}>Post</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Post;
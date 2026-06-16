import React, { Component } from "react";
import "./LoginPage.css";
import inst_image from "../../Images/9364675fb26a.svg";
import logoinsta from "../../Images/logoinsta.png";
import fb from "../../Images/fb.png";
import appstore from "../../Images/app.png";
import playstore from "../../Images/play.png";
import { useNavigate } from "react-router-dom";

function LoginPageWrapper() {
    const navigate = useNavigate();
    return <LoginPage navigate={navigate} />;
}

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleLogin = () => {
        if (this.state.username && this.state.password) {
            this.props.navigate("/home");
        } else {
            alert("Please enter your username and password");
        }
    }

    render() {
        return (
            <div className="loginpage_main">
                <img src={inst_image} width="350" alt="Instagram Phone" />

                <div className="loginpage_rightside">
                    <div className="loginpage_rightcomponent">
                        <img className="loginpage_logo" src={logoinsta} alt="Instagram Logo" />
                        <input
                            className="loginpage_text"
                            type="text"
                            placeholder="Phone number, username, or email"
                            onChange={(e) => this.setState({ username: e.target.value })}
                        />
                        <input
                            className="loginpage_text"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                        <button className="login_button" onClick={this.handleLogin}>Sign In</button>
                        <div className="login_ordiv">
                            <div className="Login_dividor"></div>
                            <div className="login_or">OR</div>
                            <div className="Login_dividor"></div>
                        </div>
                        <div className="login_fb">
                            <img src={fb} width="15px" style={{ marginRight: '5px' }} alt="fb" />
                            Log in with Facebook
                        </div>
                        <div className="login_forgot">Forgot password?</div>
                    </div>

                    <div className="loginpage_signupoptions">
                        Don't have an account? <a href="#">Sign up</a>
                    </div>

                    <div className="loginPage_downloadSection">
                        <p>Get the app.</p>
                        <div className="loginPage_option">
                            <img className="loginPage_dwing" src={appstore} width="136px" alt="App Store" />
                            <img className="loginPage_dwing" src={playstore} width="136px" alt="Google Play" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPageWrapper;
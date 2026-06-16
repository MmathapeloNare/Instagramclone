import React, {Component} from 'react';
import './Home.css';
import MainContent from '../MainContent/MainContent';
import SideNav from '../SideNav/SideNav';
import ProfilePage from '../ProfilePage/ProfilePage';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { activePage: 'home' }
    }

    render () {
        return (
            <div className="home_container">
                <SideNav
                    activePage={this.state.activePage}
                    onNavigate={(page) => this.setState({ activePage: page })}
                />
                <div className="home_content">
                    {this.state.activePage === 'home' && <MainContent />}
                    {this.state.activePage === 'profile' && <ProfilePage />}
                </div>
            </div>
        );
    }
}

export default Home;
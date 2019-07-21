import React from 'react';
import { connect } from 'react-redux';
import { OAuth2Client } from 'google-auth-library';
import { LoginActions } from '../actions/login_actions';
import styled from 'styled-components';
import logoutUser from '../utilities/logout_user.js';

class LoginButton extends React.Component {
    constructor(){
        super();
        this.state = {
            loginUrl: "PLACEHOLDER",
            email: "undef",
            domain: "undef"
        };
        this.getLoginUrl = this.getLoginUrl.bind(this);
        this.getProfileInfo = this.getProfileInfo.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.renderLoginButton = this.renderLoginButton.bind(this);
        this.renderLogoutButton = this.renderLogoutButton.bind(this);
    }

    getLoginUrl(oauth2Client){
        const url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            prompt: 'consent',
            scope: ['profile', 'email']
          });
        this.setState({
            loginUrl: url
        })
    }
    
    getProfileInfo(oauth2Client){
        const refresh_token = localStorage.getItem("wolverinerank-refresh-token");
        if (refresh_token){
            if (this.props.profile){
                this.setState({
                    email: this.props.profile.email,
                    domain: this.props.profile.hd
                })
            } else {
                const getProfileInfoUrl = 'https://www.googleapis.com/oauth2/v2/userinfo';
                oauth2Client.request({url: getProfileInfoUrl}).then((res) =>
                {
                    this.props.setProfileInfo(res.data);
                    this.setState({
                        email: this.props.profile.email,
                        domain: this.props.profile.hd
                    })
                })
            }
        }
    }

    componentDidMount() {
        const oauth2Client = new OAuth2Client(
            process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
            process.env.REACT_APP_GOOGLE_AUTH_CLIENT_SECRET,
            window.location.origin + process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI
        );
        oauth2Client.on('tokens', (tokens) => {
            this.props.setLoginTokens(tokens);
            if (tokens.refresh_token) {
                localStorage.setItem("wolverinerank-refresh-token", tokens.refresh_token)
            }
        });

        if (this.props.tokens){
            oauth2Client.setCredentials(this.props.tokens);
        } else {
            const refresh_token = localStorage.getItem("wolverinerank-refresh-token");
            if (refresh_token) {
                oauth2Client.setCredentials({
                    refresh_token
                });
            } else {
                this.getLoginUrl(oauth2Client);
            }
        }

        this.getProfileInfo(oauth2Client);
    }

    loginUser() {
        localStorage.setItem("wolverinerank-current-page", window.location);
        window.location = this.state.loginUrl;
    }

    renderLoginButton() {
        
        const LoginWithGoogle = styled.button`
            background: url("${process.env.PUBLIC_URL}/login/google_login_normal.png");

            width: 200px;
            height: 48px;
            border: none;
            background-size: 200px 48px;

            :focus {
                background: url("${process.env.PUBLIC_URL}/login/google_login_focus.png");
                background-size: 200px 48px;
            }
            :active {
                background: url("${process.env.PUBLIC_URL}/login/google_login_pressed.png");
                background-size: 200px 48px;
            }
        `;
        return (<LoginWithGoogle onClick={this.loginUser}/>);
    }

    logoutUser(onLogout) {
        localStorage.setItem("wolverinerank-current-page", window.location);
        localStorage.removeItem("wolverinerank-refresh-token");
        onLogout();
        window.location = localStorage.getItem("wolverinerank-current-page");
    }

    renderLogoutButton() {

        const Logout = styled.button`
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            color: #757575;
            padding: 5px 15px;
            background-color: white;
            border-radius: 3px;
            border: 1px solid gray;
        `;
        return (<span>Logged in as {this.state.email}. <Logout onClick={() => { logoutUser(this.props.clearProfileInfo) }}>Logout</Logout></span>);
    }

    render() {
        return this.state.loginUrl === "PLACEHOLDER" ? this.renderLogoutButton() : this.renderLoginButton();
    }
}
const mapStateToProps = state => ({
    tokens: (state.loginReducers.setLoginTokens.tokens),
    profile: (state.loginReducers.profileInfo.profile)
})

const mapDispatchToProps = dispatch => ({
    setLoginTokens: tokens => dispatch(LoginActions.setLoginTokens(tokens)),
    setProfileInfo: profile => dispatch(LoginActions.setProfileInfo(profile)),
    clearProfileInfo: () => dispatch(LoginActions.clearProfileInfo())
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
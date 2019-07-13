// import React from 'react';
// import { connect } from 'react-redux';
// import { OAuth2Client } from 'google-auth-library';
// import { LoginActions } from '../../actions/login_actions';
// import { withRouter } from 'react-router-dom';


// class LoginPage extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             domain: "undef",
//         }
//     }

//     componentDidMount() {
        
//         const urlParams = new URLSearchParams(this.props.location.search);
//         const code = urlParams.get('code');
//         if (code === null){
//             window.location = localStorage.getItem("wolverinerank-current-page");
//         }
//         const oauth2Client = new OAuth2Client(
//             process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
//             process.env.REACT_APP_GOOGLE_AUTH_CLIENT_SECRET,
//             window.location.origin + process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI
//         );

//         oauth2Client.getToken(code).then(({tokens}) =>
//         {
//             localStorage.setItem("wolverinerank-refresh-token", tokens.refresh_token)
//             this.props.setLoginTokens(tokens)
//             oauth2Client.setCredentials(tokens)
//             const getProfileInfoUrl = 'https://www.googleapis.com/oauth2/v2/userinfo';
//             oauth2Client.request({url: getProfileInfoUrl}).then((res) =>
//             {
//                 this.props.setProfileInfo(res.data);
//                 this.setState({
//                     domain: this.props.profile.hd,
//                 })
//             })
//             window.location = window.location.origin + "/login";
//         }
//         ).catch((err) => this.props.setLoginTokensFailure(err));
//     }

//     render() {
//         return (
//             <p>{ ( !this.props.profile ) ? "Logging in..." : (this.props.profile.hd === "umich.edu" ? "Logged in as " + this.props.profile.email + ". Continue back to the homepage." : "Not logged in with a University of Michigan email. Please logout and log back in with a valid email to continue.") }</p>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     profile: (state.loginReducers.profileInfo.profile)
// })

// const mapDispatchToProps = (dispatch) => ({
//     setLoginTokens: tokens => dispatch(LoginActions.setLoginTokens(tokens)),
//     setLoginTokensFailure: error => dispatch(LoginActions.setLoginTokensFailure(error)),
//     setProfileInfo: profile => dispatch(LoginActions.setProfileInfo(profile))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
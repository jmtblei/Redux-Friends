import React from 'react';
import { connect } from 'react-redux';
import { login, fetchFriends } from '../actions';

class LoginPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    handleLogin = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/FriendList');
            })
            .then(() => {
                this.props.fetchFriends();
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    friends: state.friends
})

export default connect(
    mapStateToProps,
    { login, fetchFriends }
)(LoginPage)
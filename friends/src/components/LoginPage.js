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
        console.log(this.state.credentials)
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/FriendList');
            })
            .then(() => {
                this.props.fetchFriends();
            })
    }

    render() {
        console.log('hello')
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
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
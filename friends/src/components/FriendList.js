import React from 'react';
import Friend from './Friend';
import { connect } from 'react-redux';
import { fetchFriends, addFriend, deleteFriend } from '../actions';

class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        };
    }
    
    componentDidMount() {
        this.props.fetchFriends();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleAddfriend = event => {
        event.preventDefault();
        this.props.addFriend(this.state);
    }

    handleDelete = id => {
        this.props.deleteFriend(id);
    }

    render() {
        if (this.props.fetchingFriends) {
            return <h2> Fetching your friends...</h2>
        }
        return (
            <div>
                <div>
                    <form onSubmit={this.handleAddfriend}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter age"
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Add Friend</button>
                    </form>
                </div>
                <div>
                {this.props.friends.map(friend => (
                    <Friend 
                        key={friend.id}
                        friend={friend}
                    />
                ))} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    addingFriends: state.addingFriends,
    friendAdded: state.friendAdded,
})

export default connect(
    mapStateToProps, 
    { fetchFriends, addFriend, deleteFriend }
)(FriendList);
import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

export const fetchFriends = () => dispatch => {
    dispatch({
        type: FETCH_FRIENDS,
    })
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
            dispatch({
                type: FRIENDS_FETCHED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({ err });
        });
}

export const addFriend = newFriend => dispatch => {
    dispatch({
        type: ADDING_FRIEND
    })
    axios
        .post('http://localhost:5000/friends', newFriend)
        .then(res => {
            console.log(res);
            dispatch({
                type: FRIEND_ADDED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({ err })
        })
}

export const deleteFriend = id => dispatch => {
    dispatch({
        type: DELETE_FRIEND
    })
    axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(res => {
            console.log(res);
            dispatch({
                type: FRIEND_DELETED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({ err })
        })
}
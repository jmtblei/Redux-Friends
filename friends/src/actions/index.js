import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const FETCH_FAIL = 'FETCH_FAIL';

export const login = credentials => dispatch => {
    dispatch({
        type: LOGGING_IN
    })
    axios
        .post('http://localhost:5000/api/login', credentials, { username: 'Lambda School', password: 'i<3Lambd4' })
        .then(res => {
            console.log(res);
           localStorage.setItem('token', res.data.payload);
           dispatch({
               type: LOGGED_IN,
               payload: res.data.payload
           }) 
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: LOGIN_FAIL,
                payload: err
            })
        })
}

export const fetchFriends = () => dispatch => {
    dispatch({
        type: FETCH_FRIENDS
    })
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            Authorization: token, "Content-Type": "application/json"
        }
    }
    axios
        .get('http://localhost:5000/api/friends', headers)
        .then(res => {
            console.log(res);
            dispatch({
                type: FRIENDS_FETCHED,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
            dispatch({ 
                type: FETCH_FAIL,
                payload: err.response 
            });
        });
}

export const addFriend = newFriend => dispatch => {
    dispatch({
        type: ADDING_FRIEND
    })
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            Authorization: token, "Content-Type": "application/json"
        }
    }
    axios
        .post('http://localhost:5000/friends', newFriend, headers)
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
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            Authorization: token, "Content-Type": "application/json"
        }
    }
    axios
        .delete(`http://localhost:5000/friends/${id}`, headers)
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
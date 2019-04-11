import {
    LOGGING_IN,
    LOGGED_IN,
    LOGIN_FAIL,
    FETCH_FRIENDS,
    FRIENDS_FETCHED,
    FETCH_FAIL,
    ADDING_FRIEND,
    FRIEND_ADDED,
    DELETE_FRIEND,
    FRIEND_DELETED,
} from '../actions';

const initialState = {
    loggingIn: false,
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    deletingFriend: false,
    friendDeleted: false,
    addingFriends: false,
    friendAdded: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_IN:
            return {
                ...state,
                error: '',
                loggingIn: true
            }
        case LOGGED_IN:
            return {
                ...state,
                error: '',
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case FETCH_FRIENDS:
            return {
                ...state,
                fetchingFriends: true
            };
        case FRIENDS_FETCHED:
            return {
                ...state,
                friends: action.payload,
                friendsFetched: !state.friendsFetched,
                fetchingFriends: !state.fetchingFriends
            };
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case ADDING_FRIEND:
            return {
                ...state,
                addingFriends: !state.addingFriends
            };
        case FRIEND_ADDED:
            return {
                ...state,
                friends: action.payload
            };
        case DELETE_FRIEND:
            return {
                ...state,
                deletingFriend: !state.deletingFriend
            };
        case FRIEND_DELETED:
            return {
                ...state,
                friends: action.payload
            };

    default: return state; 
    }
}
export default reducer;
import React from 'react';

const Friend = props => {
    return (
        <div>
            <h4>{props.friend.name}</h4>
            <h4>{props.friend.age}</h4>
            <h4>{props.friend.email}</h4>
            <button onClick={() => props.handleDelete(props.friend.id)}>Delete Friend</button>
        </div>
    )
};
export default Friend;
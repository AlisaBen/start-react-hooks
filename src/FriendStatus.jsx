import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
    const [ isOnline, setIsOnline ] = useState(null);
    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            ChatAPI.unscribeFromFriendStatus(props.friend.id, handleStatusChange);
        }
    });

    if (isOnline === null) {
        return 'loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}
export default FriendStatus;

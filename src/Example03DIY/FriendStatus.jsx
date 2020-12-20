import { useFriendStatus } from './index';

function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);
    if (isOnline === null) {
        return 'loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

export {
    FriendStatus,
}
import React, { useEffect, useState } from 'react';

function useFriendStatus(friendID){
    const [ isOnline, setIsOnline ] = useState(null);
    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    // 销毁组件的时候取消对ChatAPI的订阅，在后续渲染的时候重新执行副作用
    // 可以把订阅和取消订阅都放在这里实现，而不用拆分到不同的生命周期函数
    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unscribeFromFriendStatus(friendID, handleStatusChange);
        }
    });

    return isOnline;
}

export {
    useFriendStatus,
}
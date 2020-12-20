import React, { useState, useEffect } from 'react';

export default () => {
    const [ count, setCount ] = useState(0);

    // 相当于componentDidMount和componentDidUpdate函数
    useEffect(() => {
        document.title = `you click ${count} times`
    })

    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}


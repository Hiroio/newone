import React, {useState} from 'react';

const Counter = function () {
    const [count, setCount] = useState(0)

    function degree() {
        setCount(count +1)
    }

    function disgree() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={degree}>+</button>
            <button onClick={disgree}>-</button>
        </div>
    )
};

export default Counter;
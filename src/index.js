import ReactDOM from 'react-dom';
import React from 'react';

function App() {
    return (
        <div>
            {
                ['a','b'].map(item => (<p>{item}</p>))
            }
        </div>
    )
}
ReactDOM.render(<App />,document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'


const NumberContext = React.createContext()
// {Provider, Consumer}
function Display() {
    return (
    <NumberContext.Consumer>
        {value => <div>the number is {value}</div>}
    </NumberContext.Consumer>
    )
}
function Create() {
    return (
        <NumberContext.Consumer>
            {value => <div>create the number {value}</div>}
        </NumberContext.Consumer>
    )
}
function App() {
    return (
        <NumberContext.Provider value={33}>
            <div><Display></Display><Create></Create></div>
        </NumberContext.Provider>
    )
}


export default App

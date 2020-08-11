import React, { useContext } from 'react'
import ReactDOM from 'react-dom'


const NumberContext = React.createContext()
// {Provider, Consumer}
function Display() {
    const value = useContext(NumberContext)
    return (
        <div>the number is {value},this is useContext</div>
    )
}
function Create() {
    const value = useContext(NumberContext)
    return (
        <div>create the number {value},this is useContext</div>
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

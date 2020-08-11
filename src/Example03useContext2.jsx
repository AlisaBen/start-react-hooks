import React, { useContext } from 'react'
import ReactDOM from 'react-dom'


const NumberContext = React.createContext()
const NameContext = React.createContext({})
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
function Name() {
    const value = useContext(NameContext)
    return (
        <div>get the name of {value.name}</div>
    )
}
function App() {
    return (
        <NumberContext.Provider value={33}>
            <NameContext.Provider value={{name: "aaa"}}>
                <div><Display></Display><Create></Create><Name></Name></div>
            </NameContext.Provider>
        </NumberContext.Provider>
    )
}


export default App

import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
const myReducer = (state, action) => {
    switch(action.type) {
        case 'Add':
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }

}
const NewCounter = () => {
    const [state, dispatch] = useReducer(myReducer, {count: 0})
    return (
        <div>
            <button onClick={() => dispatch({ type: 'Add'})}>Add</button>
            <p>count:{state.count}</p>
        </div>
    ) 
}

export default NewCounter
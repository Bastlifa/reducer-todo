import React, {useReducer, useState} from "react"
import { reducer, initialState } from '../../reducers/reducer'
import TodoList from '../TodoList/TodoList'
const Form = () =>
{
    const [state, dispatch] = useReducer(reducer, initialState)
    const [curInput, setCurInput] = useState('')

    const handleChange = e =>
    {
        setCurInput(e.target.value)
    }

    const submitHandle = e =>
    {
        e.preventDefault()
        dispatch({type: "ADD", todo: {item: curInput, id: Date.now(), completed: false, timeCompleted: ''}})
        setCurInput("")
        console.log("state from submit", state)

    }
    const clearHandle = e =>
    {
        e.preventDefault()
        dispatch({type: "CLEAR_COMPLETED"})
    }
    return (
        <>
            <form>
                <input type="text" value={curInput} onChange={handleChange}/>
                <button onClick={submitHandle} type="submit">Add Todo</button>
                <button onClick={clearHandle}>Clear Completed</button>
            </form>
            <TodoList todos={state} dispatch={dispatch} />
        </>
    )
}

export default Form


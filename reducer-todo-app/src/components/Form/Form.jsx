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
        dispatch({type: "ADD", todo: {item: curInput, id: Date.now(), completed: false}})
        setCurInput("")
        console.log("state from submit", state)

    }
    return (
        <>
            <form>
                <input type="text" value={curInput} onChange={handleChange}/>
                <button onClick={submitHandle}>Add Todo</button>
            </form>
            <TodoList todos={state} dispatch={dispatch} />
        </>
    )
}

export default Form


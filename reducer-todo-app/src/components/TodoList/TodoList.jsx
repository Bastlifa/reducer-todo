import React, {useReducer} from "react"
import { reducer, initialState } from '../../reducers/reducer'
import Todo from '../Todo/Todo'

const TodoList = (props) =>
{
    const { todos } = props
    return (
        <>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </>
    )
}

export default TodoList
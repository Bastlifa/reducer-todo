import React from "react"
import Todo from '../Todo/Todo'

const TodoList = (props) =>
{
    const { todos, dispatch } = props
    return (
        <>
            {todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch}/>)}
        </>
    )
}

export default TodoList
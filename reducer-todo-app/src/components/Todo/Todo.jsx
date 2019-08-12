import React from "react"

const Todo = (props) =>
{
    const { todo, dispatch } = props
    return (
        <div className={`${todo.completed ? "completed" : ""} todo`} onClick={_ => dispatch({type: "TOGGLE_COMPLETED", id: todo.id})}>{todo.item}</div>
    )
}

export default Todo
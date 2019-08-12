import React from "react"

const Todo = (props) =>
{
    const { todo } = props
    return (
        <div className="todo">{todo.item}</div>
    )
}

export default Todo
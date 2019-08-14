import React from "react"
import moment from 'moment'

const Todo = (props) =>
{
    const { todo, dispatch } = props
    return (
        <div 
            className={`${todo.completed ? "completed" : ""} todo`} 
            onClick={_ => dispatch({type: "TOGGLE_COMPLETED", id: todo.id})}
        >
            {`${todo.item}${todo.completed ? `, completed at ${moment(todo.timeCompleted).format("MMMM Do, h:mm a")}` : ''}`}
            
        </div>
    )
}

export default Todo
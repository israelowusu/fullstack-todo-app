import React, { useState } from "react";

function Todo({ todo, deleteHandler, updateHandler }) {

    const [isEditing, setIsEditing] = useState(false)
    const [updatedTodo, setUpdatedTodo] = useState()

    const updatedTodoState = e => {
        // update the state with the value entered in the input
        setUpdatedTodo({
            id: todo.id,
            message: e.target.value
        })
    }

    const updateAndReset = (input, e) => {
        e.preventDefault()
        // call updateHandler with the input
        updateHandler(input)
        setIsEditing(false)
    }
    return (
        <div>
            {isEditing ? 
                <form onSubmit={e => updateAndReset(updatedTodo, e)}>
                    <input
                        type="text"
                        defaultValue={todo.message}
                        onChange={updatedTodoState}
                    />
                </form> 
                : 
                <p onDoubleClick={() => setIsEditing(true)}>{todo.message}</p>
            }
            <button onClick={() => deleteHandler(todo.id)}>X</button>
        </div>
    )
}

export default Todo;
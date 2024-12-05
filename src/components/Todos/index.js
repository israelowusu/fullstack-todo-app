import React, { useState } from "react";
import TodoForm from './TodoForm'
import TodoList from "./TodoList";

const initialState = [
    { id: 1, message: 'Be confident' },
    { id: 2, message: 'Shoulders back' },
    { id: 3, message: 'Chin towards God' }
  ]

function Todos() {
    const [todoList, setTodoList] = useState(initialState);

    const deleteHandler = id => {
        const newTodos = todoList.filter(item => {
            return item.id !== id
        })

        setTodoList(newTodos)
    }

    const updateHandler = todo => {
        // update logic goes here
        setTodoList(todoList.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    message: todo.message
                }
            } else {
                return item
            }
        }))
    }

    return(
        <div>
            <TodoForm todos={todoList} setTodos={setTodoList} />
            <TodoList todos={todoList} deleteHandler={deleteHandler} updateHandler={updateHandler} />
        </div>
    )
}

export default Todos;
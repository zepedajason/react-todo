import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const add = newTodo => {
        setTodos(todos => [...todos, newTodo])
    }

    const todoComponents = todos.map(todo => (
        <Todo task={todo.task} key={todo.id} id={todo.id} />
    ));

return (
    <div>
        <NewTodoForm addTodo={add}/>
        <ul>{todoComponents}</ul>
    </div>
    
)


}

export default TodoList;
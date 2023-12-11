import { Todo } from "../App"
import TodoItem from "./TodoItem"

interface Props {
    todos: Todo[],
    updateTodo: (selectTodo : Todo) => void,
    deleteTodo: (selectTodo : Todo) => void,
}

const Todos = ({todos, updateTodo, deleteTodo}: Props) => {
  return (
    <div>
        {
          todos.map((todos) => (
            <TodoItem key={todos.text} todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          ))
        }  
    </div>
  )
}

export default Todos
import { Todo } from "../App"

interface Props {
    todos: Todo,
    updateTodo: (selectTodo : Todo) => void,
    deleteTodo: (selectTodo : Todo) => void,
}

const TodoItem = ({todos, updateTodo, deleteTodo}: Props) => {
  return (
    <article key={todos.text}>
    <label htmlFor="todo">
      <input type="checkbox" checked={todos.complete} id="todo" onChange={() => updateTodo(todos)} /> {todos.text}
    </label>
    <button className="contrast" onClick={() => deleteTodo(todos)} >Delete</button>
  </article>
  )
}

export default TodoItem
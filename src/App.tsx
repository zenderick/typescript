import { useState } from "react";
import FormAdd from "./components/FormAdd"
import Todos from "./components/Todos";

export interface Todo {
  text: string,
  complete: boolean,
}

const initialTodos = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

const App = () => {

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text:string) => {
    const newtodo = {text, complete: false};
    setTodos([...todos, newtodo])
  }

   const updateTodo =  (selectTodo: Todo) => {
    setTodos((prevTodos) => {
      return  prevTodos.map((todo) => {
        if ( todo === selectTodo){
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    }) 
   }

   const deleteTodo = (selectTodo : Todo) => {
      setTodos((prevTodos) => {
        return prevTodos.filter((todo)=> todo != selectTodo)
      })
   }

  return (
    <div className="container">
      <h1>Todos</h1>
      <FormAdd addTodo={addTodo} />
      <div>
        <Todos updateTodo={updateTodo} deleteTodo={deleteTodo} todos={todos} />
      </div>
    </div>
  )
}

export default App
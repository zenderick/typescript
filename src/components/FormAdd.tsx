import { useState, ChangeEvent } from "react";

interface Props{
    addTodo: (text: string) => void;
}

const FormAdd = ({addTodo}: Props) => {

  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimText = text.trim();

    if(!trimText) return 
    addTodo(trimText);
    setText("")
  }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo
        <input type="text" id='todo' placeholder="Ingrese Todo" value={text} onChange={handleChange} />
        </label>
        <button type="submit">Add todo</button>
        </form>
    </div>
  )
}

export default FormAdd;
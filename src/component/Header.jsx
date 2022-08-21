import React, {useState} from 'react'
import Form from './Form'
import TodoList from './TodoList';

const Header = () => {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

  return (
    <div className='header'>
      <h1>Todo List App</h1>
      <div>
          <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
      </div>
      <div>
          <TodoList 
            todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo}
          />
      </div>
    </div>
  )
}

export default Header;

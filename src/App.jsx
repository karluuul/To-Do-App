import React, { useState } from 'react';
import TodoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({index: null, text: ''});

  const addTodo = (todo) => {
    if(isEdit){
      updateTodo(currentTodo.index, todo);
    }else{
      setTodos([...todos, todo]);
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setIsEdit(true);
    setCurrentTodo({ index, text: todos[index] });
  };

  const updateTodo = (index, updatedTodo) => {
    const newTodos = todos.map((todo, i) => (i === index ? updatedTodo : todo));
    setTodos(newTodos);
    setIsEdit(false);
    setCurrentTodo({ index: null, text: '' });
  };

  


  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm 
        addTodo={addTodo}
        currentTodo={currentTodo}
        isEdit ={isEdit}
      />
      <TodoList 
        todos={todos} 
        removeTodo={removeTodo}
        editTodo={editTodo}
        />
    </div>
  );
};

export default App;

import React from 'react';
import TodoItem from './ToDoItem';

const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          todo={todo} 
          removeTodo={() => removeTodo(index)} 
          editTodo={() => editTodo(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;

import React from 'react';

const TodoItem = ({ todo, removeTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b">
    <span>{todo}</span>
    <div className="ml-auto">
      <button
        onClick={editTodo}
        className="bg-green-500 text-white px-2 mr-2"
      >
        Edit
      </button>
      <button
        onClick={removeTodo}
        className="bg-red-500 text-white px-2"
      >
        Remove
      </button>
    </div>
  </div>
  
  );
};

export default TodoItem;

import React, { useEffect, useState } from 'react';

const TodoForm = ({ addTodo, currentTodo, isEdit }) => {
  const [input, setInput] = useState('');

  useEffect(() =>{
    if(isEdit){
      setInput(currentTodo.text);
    }
  }, [currentTodo, isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 flex-grow mr-2"
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4">
        {isEdit ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;

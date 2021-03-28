import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleClick = () => {
    //const tab = todos;
    todos.push(todo);
  };
  const handleDelete = (indexToDelete) => {
    const tab = todos;
    tab.filter((e, index) => index !== indexToDelete);
    setTodos(tab);
  };

  return (
    <div className='App'>
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add</button>
      <div>
        {todos.length > 0 &&
          todos.map((e, index) => (
            <div key={index}>
              <p>{e}</p>
              <button value={e} onClick={handleDelete(index)}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;

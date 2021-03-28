import { useEffect, useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleClick = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };
  const handleDelete = (indexToDelete) => {
    const tab = todos;
    tab.filter((e, index) => index !== indexToDelete);
    setTodos(tab);
  };
  // useEffect(() => {}, [todos]);

  return (
    <div className='App'>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {todos && todos.length > 0
          ? todos.map((e, index) => (
              <li key={index}>
                <p>{e}</p>
                <button onClick={handleDelete(index)}>Delete</button>
              </li>
            ))
          : 'No items'}
      </ul>
    </div>
  );
}

export default App;

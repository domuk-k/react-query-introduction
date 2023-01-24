import EntryInput from './components/EntryInput';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">Todo App</header>
      <EntryInput />
      <TodoList />
    </div>
  );
}

export default App;

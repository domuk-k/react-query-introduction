import EntryInput from './components/EntryInput';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  return (
    <main className="container">
      <header className="header">Todo App</header>
      <EntryInput />
      <TodoList />
    </main>
  );
}

export default App;

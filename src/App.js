import './App.css';
import Counter from './components/Counter/'
import AddTodo from './components/AddTodo/'
import Notification from './components/Notification/'

function App() {
  return (
    <div className="App">
      <Notification />
      <Counter />
      <AddTodo />
    </div>
  );
}

export default App;

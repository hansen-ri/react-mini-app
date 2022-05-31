import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My To-Dos</h1>
      <Todo text='Learn React'/>
      <Todo text='Get a React Job'/>
      <Todo text='Get paid the big bucks'/>
      <Modal/>
      <Backdrop/>
    </div>);
}

export default App;

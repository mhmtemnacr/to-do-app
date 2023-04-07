import {useState} from 'react'
import './App.css'
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function App() {
    const [toDo, setToDo] = useState("")
    const [toDos, setToDos] = useState([])

    const addToDo = () => {
        if (toDo !== "") {
            setToDos([...toDos, toDo]);
            setToDo("")
        }
    };

    const deleteToDo = (id) => {
        const newToDos = toDos.filter((toDo, i) => {
             return i !== id;
        });
        // const newToDos = toDos.splice(id, 1)
        setToDos(newToDos);
    }

    return (
        <div className="App">
            <h1>To-Do App</h1>
            <TodoInput toDo={toDo} addToDo={addToDo} setToDo={setToDo} />
            <TodoList list={toDos} remove={deleteToDo} />
        </div>
    )
}

export default App

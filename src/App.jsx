import {useState} from 'react'
import './App.css'
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function App() {
    const [toDo, setToDo] = useState("")
    const [toDos, setToDos] = useState([])
    const [editID, setEditID] = useState(-1)

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

        if (editID >= id) {
            setEditID(editID - 1)
        }
    }

    const editToDo = (id) => {
        setEditID(id)
    }

    const handleEdited = (index, newText) => {
        toDos[index] = newText
        setEditID(-1)
    }

    return (
        <div className="App">
            <h1>To-Do App</h1>
            <TodoInput toDo={toDo} addToDo={addToDo} setToDo={setToDo} />
            <TodoList list={toDos} edit={editToDo} editID={editID} handleEdited={handleEdited} remove={deleteToDo} />
        </div>
    )
}

export default App

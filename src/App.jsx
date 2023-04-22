import {useState, useEffect} from 'react'
import './App.css'
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function App() {
    const [toDo, setToDo] = useState("")
    const [toDos, setToDos] = useState([])
    const [editID, setEditID] = useState(-1)

    useEffect(() => {
        console.log('Function component mounted!');
        loadToDos()
        console.log('Loaded to-dos!');
    }, []);

    useEffect(() => {
        saveToDos()
    }, [toDos]);

    const addToDo = () => {
        if (toDo !== "") {
            setToDos([...toDos, toDo]);
            setToDo("")
        }
    };

    const deleteToDo = (id) => {

        const newToDos = [...toDos]
        newToDos.splice(id, 1)
        setToDos(newToDos)

        if (editID > id) {
            setEditID(editID - 1)
        }
        else if (editID === id) {
            setEditID(-1)
        }
    }

    const editToDo = (id) => {
        setEditID(id)
    }

    const saveToDos = () => {
        localStorage.setItem("toDos", JSON.stringify(toDos))
    }

    const loadToDos = () => {
        const storedArray = localStorage.getItem("toDos")
        const parsedArray = JSON.parse(storedArray)

        if (parsedArray.length > 0) {
            setToDos(parsedArray)
        }
    }

    const handleEdited = (index, newText) => {
        toDos[index] = newText
        setEditID(-1)
        saveToDos()
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

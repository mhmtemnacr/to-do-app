import { FaEdit, FaCheck } from 'react-icons/fa';
import { useState } from "react";

const TodoList = ({ list, remove, edit, editID, handleEdited }) => {
    const [editText, setEditText] = useState("");

    const handleEditChange = (e) => {
        setEditText(e.target.value)
    }

    return (
        <>
            {list?.length > 0 ? (
                <ul className="todo-list">
                    <h2>Tasks</h2>
                    {list.map((toDo, index) => (
                        <div className="todo" key={index}>
                            {editID === index ? (
                                <>
                                    <li className="edit" key={index}>
                                        <input
                                            className="edit-input"
                                            type="text"
                                            value={editText}
                                            onChange={handleEditChange}
                                        />
                                    </li>
                                    <button
                                        className="edit-button"
                                        onClick={() => {
                                            handleEdited(index, editText)
                                        }}
                                    >
                                        <FaCheck size={14} color="#d3d7f0"/>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <li key={index}> {toDo} </li>
                                    <button
                                        className="edit-button"
                                        onClick={() => {
                                            edit(index)
                                            setEditText(toDo)
                                        }}
                                    >
                                        <FaEdit size={14} color="#d3d7f0"/>
                                    </button>
                                </>
                            )
                            }
                            <button
                                className="delete-button"
                                onClick={() => {
                                    remove(index)
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}
        </>
    )
}

export default TodoList;
const TodoList = ({ list, remove }) => {
    return (
        <>
            {list?.length > 0 ? (
                <ul className="todo-list">
                    <h2>Tasks</h2>
                    {list.map((toDo, index) => (
                        <div className="todo">
                            <li key={index}> {toDo} </li>
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
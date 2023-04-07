const TodoInput = ({ toDo, setToDo, addToDo }) => {
    return (
        <div className="input-wrapper">
        <input
            type="text"
            name="toDo"
            value={toDo}
            placeholder="Create a new to-do"
            onChange={(e) => {
                setToDo(e.target.value)
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    addToDo()
                }
            }}
        />
        <button className="add-button" onClick={addToDo}>
            Add
        </button>
    </div>
    )
}

export default TodoInput;
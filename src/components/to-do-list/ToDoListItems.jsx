const ToDoListItems = ({
  item,
  setEditingItemId,
  setEditedText,
  editedText,
  editingItemId,
  setTodoItems,
}) => {
  const isEditing = editingItemId === item.id;

  const handleEdit = () => {
    setEditingItemId(item.id);
    setEditedText(item.text);
  };

  const handleSave = () => {
    setTodoItems((prev) =>
      prev.map((item) => {
        return item.id === editingItemId ? { ...item, text: editedText } : item;
      }),
    );

    setEditingItemId(null);
    setEditedText("");
  };

  const handleDelete = (deleteItemId) => {
    setTodoItems((prev) =>
      prev.filter((item) => {
        return item.id !== deleteItemId;
      }),
    );
  };

  const handleCompleted = (isChecked, completedId) => {
    setTodoItems((prev) =>
      prev.map((item) => {
        return item.id === completedId
          ? { ...item, isCompleted: isChecked }
          : item;
      }),
    );
  };

  return (
    <div className="flex justify-between m-1">
      <div>
        {isEditing ? (
          <input
            type="text"
            className="border"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <div className={item.isCompleted ? "line-through" : ""}>
            {item.text}
          </div>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          className="m-2"
          onChange={(e) => handleCompleted(e.target.checked, item.id)}
        />
        <button
          className="bg-red-500 p-1"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
        {isEditing ? (
          <button className="bg-green-400 p-1" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="bg-amber-300 p-1" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoListItems;

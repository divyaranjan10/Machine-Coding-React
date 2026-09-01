import ToDoListItems from "./ToDoListItems";

const ToDoList = ({
  todoItems,
  setEditingItemId,
  setQuery,
  setEditedText,
  editedText,
  editingItemId,
  setTodoItems,
}) => {
  return todoItems.map((item) => {
    return (
      <ToDoListItems
        todoItems={todoItems}
        key={item.id}
        item={item}
        setEditingItemId={setEditingItemId}
        setQuery={setQuery}
        setEditedText={setEditedText}
        editedText={editedText}
        editingItemId={editingItemId}
        setTodoItems={setTodoItems}
      />
    );
  });
};

export default ToDoList;

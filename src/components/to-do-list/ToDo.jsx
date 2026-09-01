import { useEffect, useState } from "react";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [query, setQuery] = useState("");
  // The () => is useful because React only reads localStorage when the initial state is needed.
  // So when do we use () =>?
  // When getting the initial value requires some computation or work.
  // this is called lazy initialization
  const [todoItems, setTodoItems] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  const saveTodoItems = () => {
    setQuery("");
    setTodoItems((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          text: query,
          isCompleted: false,
        },
      ];
    });
  };

  console.log(todoItems);

  return (
    <div>
      <input
        type="text"
        className="border p-1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-black p-1 text-white border"
        onClick={saveTodoItems}
      >
        Add Item
      </button>

      <ToDoList
        todoItems={todoItems}
        setEditingItemId={setEditingItemId}
        setQuery={setQuery}
        setEditedText={setEditedText}
        editedText={editedText}
        editingItemId={editingItemId}
        setTodoItems={setTodoItems}
      />
    </div>
  );
};

export default ToDo;

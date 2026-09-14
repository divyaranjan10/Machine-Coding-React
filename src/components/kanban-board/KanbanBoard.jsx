import { useState } from "react";
import Task from "./Task";

const KanbanBoard = () => {
  const addTask = () => {
    if (!text.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: text,
        status: "todo",
      },
    ]);

    setText("");
  };

  const moveTask = (id, direction) => {
    // direction se status control krna hai, usse automatically task move ho jayega
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        const currentIndex = columns.indexOf(task.status);

        const newIndex =
          direction === "forward" ? currentIndex + 1 : currentIndex - 1;

        // edge case
        if (newIndex < 0 || newIndex >= columns.length) {
          return task;
        }

        return {
          ...task,
          status: columns[newIndex],
        };
      }),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => {
        return task.id !== id;
      });
    });
  };

  const saveTitle = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    );
  };

  const columns = ["todo", "in-progress", "completed"];

  const [text, setText] = useState("");

  const [tasks, setTasks] = useState([]);

  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      <h2>Kanban Board</h2>
      <input
        data-testid="task-input"
        placeholder="Enter task"
        className="inputBox"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        data-testid="add-task-button"
        className="addTaskBtn"
        onClick={addTask}
      >
        Add Task
      </button>
      <div className="kanban-board">
        {columns.map((col) => (
          <div key={col} className="column" data-testid={`column-${col}`}>
            <h4>{col.replace("-", " ").toUpperCase()}</h4>
            {tasks
              .filter((task) => task.status === col)
              .map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  moveTask={moveTask}
                  deleteTask={deleteTask}
                  saveTitle={saveTitle}
                  isEditing={editingId === task.id}
                  setIsEditing={setEditingId}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;

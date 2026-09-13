import { useState } from "react";

const Task = ({
  task,
  saveTitle,
  moveTask,
  deleteTask,
  isEditing,
  setIsEditing,
}) => {
  const [updatedText, setUpdatedText] = useState(task.title);

  const handleSave = () => {
    saveTitle(task.id, updatedText);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-400 mb-2">
      {isEditing ? (
        <input
          className="border"
          value={updatedText}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave();
            }
          }}
          onBlur={handleSave}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <p>{updatedText}</p>
      )}
      <button
        className="bg-yellow-200 p-1 m-1"
        onClick={() => saveTitle(task.id, updatedText)}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="bg-red-500 p-1 m-1"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
      {task.status === "todo" ? (
        <button
          className="bg-green-400 p-1 m-1"
          onClick={() => moveTask(task.id, "forward")}
        >
          {">"}
        </button>
      ) : task.status === "in-progress" ? (
        <>
          <button
            className="bg-green-400 p-1 m-1"
            onClick={() => moveTask(task.id, "backward")}
          >
            {"<"}
          </button>

          <button
            className="bg-green-400 p-1 m-1"
            onClick={() => moveTask(task.id, "forward")}
          >
            {">"}
          </button>
        </>
      ) : (
        <button
          className="bg-green-400 p-1 m-1"
          onClick={() => moveTask(task.id, "backward")}
        >
          {"<"}
        </button>
      )}
    </div>
  );
};

export default Task;

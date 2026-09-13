// Input field -> Save -> on every text change -> Localstorage -> page refresh -> data should be there
// clear button -> remove from input and localstorage

import { useEffect, useState } from "react";

const AutoSaveText = () => {
  const [text, setText] = useState(() => {
    return localStorage.getItem("autosave-text") || "";
  });

  useEffect(() => {
    if (text === "") {
      localStorage.removeItem("autosave-text");
    } else {
      localStorage.setItem("autosave-text", text);
    }
  }, [text]);

  const handleClick = () => {
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        className="border"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default AutoSaveText;

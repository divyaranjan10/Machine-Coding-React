import { useState } from "react";
import StackbarContainer from "./StackbarContainer";

const MainContainer = () => {
  const [snackbars, setSnackbars] = useState([]);

  const addSnackbar = () => {
    setSnackbars((prev) =>
      [
        ...prev,
        {
          id: Date.now(),
          text: "Snackbar No: " + Date.now(),
          variant: "success",
        },
      ].slice(-3),
    );
  };

  return (
    <div>
      <button className="bg-gray-200" onClick={addSnackbar}>
        Add
      </button>
      <StackbarContainer snackbars={snackbars} setSnackbars={setSnackbars} />
    </div>
  );
};

export default MainContainer;

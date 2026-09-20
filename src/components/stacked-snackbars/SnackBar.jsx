import { useEffect } from "react";

const SnackBar = ({ snackbar, closeSnackbar, id }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeSnackbar(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border">
      <span className="mr-3">{snackbar.text}</span>
      <button
        className="mr-3 bg-amber-800 p-2"
        onClick={() => closeSnackbar(snackbar.id)}
      >
        {"X"}
      </button>
    </div>
  );
};

export default SnackBar;

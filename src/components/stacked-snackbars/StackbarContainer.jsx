import SnackBar from "./SnackBar";

const StackbarContainer = ({ snackbars, setSnackbars }) => {
  const closeSnackbar = (id) => {
    setSnackbars((prev) => prev.filter((bar) => bar.id !== id));
  };

  return (
    <div>
      {snackbars.map((snackbar) => (
        <SnackBar
          key={snackbar.id}
          snackbar={snackbar}
          closeSnackbar={closeSnackbar}
          id={snackbar.id}
        />
      ))}
    </div>
  );
};

export default StackbarContainer;

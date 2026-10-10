const Input = ({ type, placeholder, value, setterFunc }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setterFunc(e.target.value)}
    />
  );
};

export default Input;

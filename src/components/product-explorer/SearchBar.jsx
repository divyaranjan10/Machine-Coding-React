const SearchBar = ({ searchQuery, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        className="border"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

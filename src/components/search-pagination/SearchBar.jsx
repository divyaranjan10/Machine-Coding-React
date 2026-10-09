const SearchBar = ({ searchText, filterResultsFunc }) => {
  return (
    <input
      type="text"
      placeholder="Search Items"
      value={searchText}
      onChange={(e) => filterResultsFunc(e.target.value)}
    />
  );
};

export default SearchBar;

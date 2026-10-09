import { useState } from "react";
import ResultList from "./ResultList";
import SearchBar from "./SearchBar";
import { stocks } from "./constant/stocks";
import Pagination from "./Pagination";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  // const [filteredResults, setFilteredResults] = useState(stocks);
  let filteredResults;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // one important concept I learned was stale state as earlier I was passing "searchText" to the filteredResults rather than "value" because react state updates are asynchronous
  function filterResultsFunc(value) {
    setSearchText(value);
    setCurrentPage(1);

    filteredResults = stocks.filter((stock) => stock.name.includes(value));
    // setFilteredResults(() =>
    //   ,
    // );
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedResults = filteredResults.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

  return (
    <div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        filterResultsFunc={filterResultsFunc}
        stocks={stocks}
      />
      <ResultList
        paginatedResults={paginatedResults}
        filteredResults={filteredResults}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default SearchPage;

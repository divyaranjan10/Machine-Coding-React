const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          onClick={() => setCurrentPage(index + 1)}
          className={`p-1 m-1 ${
            currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          key={index + 1}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

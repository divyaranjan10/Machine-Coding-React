const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="border rounded px-3 py-1 disabled:opacity-50"
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages || totalPages === 0}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="border rounded px-3 py-1 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

const ResultList = ({ paginatedResults }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Sector</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {paginatedResults.map((stock) => (
          <tr key={stock.id}>
            <td>{stock.name}</td>
            <td>{stock.symbol}</td>
            <td>{stock.sector}</td>
            <td>{stock.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultList;

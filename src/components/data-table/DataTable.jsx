import { data } from "./constant/data";

const DataTable = () => {
  return (
    <div>
      <table className="border">
        <tr className="p-1 border">
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>

        {data.map((user) => (
          <tr key={user.id} className="p-1">
            <td className="p-1">{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DataTable;

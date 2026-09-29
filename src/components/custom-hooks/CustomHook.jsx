import { useFetch } from "./useFetch/useFetch";

const CustomHook = () => {
  const { loading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading) {
    return <div>Loading Data...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default CustomHook;

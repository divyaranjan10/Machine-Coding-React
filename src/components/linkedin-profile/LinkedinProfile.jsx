import { useCallback, useEffect, useMemo, useState } from "react";
import ProfileCard from "./ProfileCard";
import Pagination from "./Pagination";

const LinkedinProfile = () => {
  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  async function fetchUser() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      setUserData(data.users);
    } catch (error) {
      setError(error.message || "Something went wrong. Try again");
    } finally {
      setLoading(false);
    }
  }

  const handleConnectionStatus = useCallback((selectedId) => {
    setConnectionStatus((prev) =>
      prev.includes(selectedId) ? prev : [...prev, selectedId],
    );
  }, []);

  const handleSearchFilter = (value) => {
    setSearchText(value);
  };

  const filteredData = useMemo(() => {
    return userData.filter((user) => {
      let fullname = user.firstName + " " + user.lastName;

      return (
        fullname.toLowerCase().includes(searchText.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }, [userData, searchText]);

  const totalPages = Math.ceil(filteredData.length / usersPerPage);

  const startIndex = (currentPage - 1) * usersPerPage;

  const paginatedUsers = filteredData.slice(
    startIndex,
    startIndex + usersPerPage,
  );

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search user"
        value={searchText}
        onChange={(e) => handleSearchFilter(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredData.length === 0 ? (
        <p>No results found.</p>
      ) : (
        paginatedUsers.map((user) => {
          const isPending = connectionStatus.includes(user.id);

          return (
            <ProfileCard
              key={user.id}
              user={user}
              isPending={isPending}
              handleConnectionStatus={handleConnectionStatus}
            />
          );
        })
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default LinkedinProfile;
